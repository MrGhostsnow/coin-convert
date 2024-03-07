"use client";
import React, { useState, useEffect } from "react";
import { CurrencyCardProps } from "@/app/interfaces/CurrencyCard";
import {
  ContainerCurrencyCard,
  FormBank,
  FieldCurrency,
  LabelCurrency,
  InputCurrency,
  FieldTaxes,
  LabelTaxes,
  SectionInput,
  InputTaxes,
  RadioBlock,
  LabelRadio,
  InputCash,
  InputCard,
  Button,
} from "./styles";

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  onTotalAmountChange,
  onTaxesValueChange,
  onPaymentTypeChange,
  onExchangeRateChange,
}) => {
  const [currencyValue, setCurrencyValue] = useState("$1");
  const [taxesValue, setTaxesValue] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [errorMessages, setErrorMessages] = useState({
    currency: "",
    taxes: "",
    paymentType: "",
  });

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = parseFloat(data?.USDBRL?.bid);
        setExchangeRate(exchangeRate);
        onExchangeRateChange(exchangeRate);
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
      });
  }, []);

  const isValidCurrency = (value: any) => {
    return !isNaN(parseFloat(value.replace("$", "")));
  };

  const isValidTaxes = (value: string) => {
    const taxesNumber = parseFloat(value.replace("%", ""));
    return (
      !isNaN(taxesNumber) &&
      isFinite(taxesNumber) &&
      taxesNumber >= 0 &&
      taxesNumber <= 100
    );
  };

  const isValidPaymentType = (value: string) => {
    return value === "dinheiro" || value === "cartão";
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCurrencyValue(value);
    if (!isValidCurrency(value)) {
      setErrorMessages((prev) => ({ ...prev, currency: "Valor inválido" }));
    } else {
      setErrorMessages((prev) => ({ ...prev, currency: "" }));
    }
  };

  const handleTaxesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTaxesValue(value);
    if (!isValidTaxes(value)) {
      setErrorMessages((prev) => ({ ...prev, taxes: "Taxa inválida" }));
    } else {
      setErrorMessages((prev) => ({ ...prev, taxes: "" }));
    }
  };

  const handlePaymentTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setPaymentType(value);
    if (!isValidPaymentType(value)) {
      setErrorMessages((prev) => ({
        ...prev,
        paymentType: "Tipo de pagamento inválido",
      }));
    } else {
      setErrorMessages((prev) => ({ ...prev, paymentType: "" }));
    }
  };

  const handleConvertClick = () => {
    if (!exchangeRate || !currencyValue || !taxesValue || !paymentType) {
      alert("Please fill in all fields.");
      return;
    }

    let taxes = parseFloat(taxesValue.replace("%", "")) || 0;
    let total: number;

    if (paymentType === "dinheiro") {
      total =
        (parseFloat(currencyValue.replace("$", "")) + taxes) *
        (exchangeRate + 0.0638);
    } else if (paymentType === "cartão") {
      total =
        (parseFloat(currencyValue.replace("$", "")) + taxes + 0.0638) *
        exchangeRate;
    } else {
      total = 0;
    }

    setTotalAmount(total);
    onTotalAmountChange(total);
    onPaymentTypeChange(paymentType);
    onTaxesValueChange(taxesValue);
  };

  return (
    <ContainerCurrencyCard>
      <FormBank>
        <FieldCurrency>
          <LabelCurrency>Dólar</LabelCurrency>
          <InputCurrency
            type="text"
            value={currencyValue}
            onChange={handleCurrencyChange}
            style={{ borderColor: errorMessages.currency ? "red" : "initial" }}
          />
          {errorMessages.currency && (
            <p style={{ color: "red" }}>{errorMessages.currency}</p>
          )}
        </FieldCurrency>
        <FieldTaxes>
          <LabelTaxes>Taxas(%)</LabelTaxes>
          <InputTaxes
            type="text"
            value={taxesValue}
            onChange={handleTaxesChange}
            style={{ borderColor: errorMessages.taxes ? "red" : "initial" }}
          />
          {errorMessages.taxes && (
            <p style={{ color: "red" }}>{errorMessages.taxes}</p>
          )}
        </FieldTaxes>
      </FormBank>
      <RadioBlock>
        <LabelRadio>Tipo de compra</LabelRadio>
        <SectionInput>
          <InputCash
            type="radio"
            name="paymentType"
            value="dinheiro"
            checked={paymentType === "dinheiro"}
            onChange={handlePaymentTypeChange}
          />
          {errorMessages.paymentType && (
            <p style={{ color: "red" }}>{errorMessages.paymentType}</p>
          )}
          <label>Dinheiro</label>
          <InputCard
            type="radio"
            name="paymentType"
            value="cartão"
            checked={paymentType === "cartão"}
            onChange={handlePaymentTypeChange}
          />
          <label>Cartão</label>
        </SectionInput>
      </RadioBlock>
      <Button onClick={handleConvertClick}>Converter</Button>
      {totalAmount !== null && <p>Total: R$ {totalAmount.toFixed(2)}</p>}
    </ContainerCurrencyCard>
  );
};

export default CurrencyCard;
