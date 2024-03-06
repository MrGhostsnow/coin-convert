import React, { useState, useEffect } from "react";

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

const CurrencyCard: React.FC = () => {
  const [currencyValue, setCurrencyValue] = useState("$1");
  const [taxesValue, setTaxesValue] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = parseFloat(data?.USDBRL?.bid);
        setExchangeRate(exchangeRate);
      })
      .catch((error) => {
        console.error("Error fetching exchange rate:", error);
      });
  }, []);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyValue(event.target.value);
  };

  const handleTaxesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaxesValue(event.target.value);
  };

  const handlePaymentTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentType(event.target.value);
  };

  const handleConvertClick = () => {
    if (!exchangeRate || !currencyValue || !taxesValue || !paymentType) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    let taxes = parseFloat(taxesValue.replace("%", "")) || 0;
    let total: number;

    if (paymentType === "cash") {
      total =
        (parseFloat(currencyValue.replace("$", "")) + taxes) *
        (exchangeRate + 0.0638);
    } else if (paymentType === "card") {
      total =
        (parseFloat(currencyValue.replace("$", "")) + taxes + 0.0638) *
        exchangeRate;
    } else {
      total = 0;
    }

    setTotalAmount(total);
  };

  console.log(
    exchangeRate,
    currencyValue,
    taxesValue,
    paymentType,
    totalAmount
  );

  return (
    <ContainerCurrencyCard>
      <FormBank>
        <FieldCurrency>
          <LabelCurrency>Dólar</LabelCurrency>
          <InputCurrency
            type="text"
            value={currencyValue}
            onChange={handleCurrencyChange}
          />
        </FieldCurrency>
        <FieldTaxes>
          <LabelTaxes>Taxas(%)</LabelTaxes>
          <InputTaxes
            type="text"
            value={taxesValue}
            onChange={handleTaxesChange}
          />
        </FieldTaxes>
      </FormBank>
      <RadioBlock>
        <LabelRadio>Tipo de compra</LabelRadio>
        <SectionInput>
          <InputCash
            type="radio"
            name="paymentType"
            value="cash"
            checked={paymentType === "cash"}
            onChange={handlePaymentTypeChange}
          />
          <label>Dinheiro</label>
          <InputCard
            type="radio"
            name="paymentType"
            value="card"
            checked={paymentType === "card"}
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
