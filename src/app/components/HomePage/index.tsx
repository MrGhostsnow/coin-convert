"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ContainerHome, SectionCurrency, ImageHome } from "./styles";
import Header from "../Header";
import bg_home from "../../assets/bg_home.png";
import CurrencyCard from "../CurrencyCard";
import DisplayResults from "../DisplayResults";

const HomePage: React.FC = () => {
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [taxesValue, setTaxesValue] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  const handleTotalAmountChange = (amount: number) => {
    setTotalAmount(amount);
  };

  const resetTotalAmount = () => {
    setTotalAmount(null);
  };

  const handleTaxesValueChange = (taxesValue: string) => {
    setTaxesValue(taxesValue);
  };

  const handlePaymentTypeChange = (paymentType: string) => {
    setPaymentType(paymentType);
  };

  const handleExchangeRateChange = (exchangeRate: number | null) => {
    setExchangeRate(exchangeRate);
  };

  return (
    <ContainerHome>
      <SectionCurrency>
        <Header />
        {totalAmount !== null ? (
          <DisplayResults
            totalAmount={totalAmount}
            taxesValue={taxesValue}
            paymentType={paymentType}
            exchangeRate={exchangeRate}
            onReset={resetTotalAmount}
          />
        ) : (
          <CurrencyCard
            onTotalAmountChange={handleTotalAmountChange}
            onTaxesValueChange={handleTaxesValueChange}
            onPaymentTypeChange={handlePaymentTypeChange}
            onExchangeRateChange={handleExchangeRateChange}
          />
        )}
      </SectionCurrency>
      <ImageHome
        src="../../assets/bg_home.png"
        alt="background-home"
        width={1340}
        height={1024}
      />
    </ContainerHome>
  );
};

export default HomePage;
