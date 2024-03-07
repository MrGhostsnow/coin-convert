import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DisplayResults from ".";

describe("DisplayResults", () => {
  test("renders the return button", () => {
    render(
      <DisplayResults
        totalAmount={0}
        taxesValue="0"
        paymentType="credit"
        exchangeRate={0}
        onReset={() => {}}
      />
    );
    const buttonElement = screen.getByText(/Voltar/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the total amount when provided", () => {
    const totalAmount = 100.5;
    render(
      <DisplayResults
        totalAmount={totalAmount}
        taxesValue="0"
        paymentType="credit"
        exchangeRate={0}
        onReset={() => {}}
      />
    );
    const totalAmountElement = screen.getByText(`R$ ${totalAmount.toFixed(2)}`);
    expect(totalAmountElement).toBeInTheDocument();
  });

  test("renders no result available when total amount is null", () => {
    render(
      <DisplayResults
        totalAmount={null}
        taxesValue="0"
        paymentType="credit"
        exchangeRate={0}
        onReset={() => {}}
      />
    );
    const noResultElement = screen.getByText(/Nenhum resultado disponível/i);
    expect(noResultElement).toBeInTheDocument();
  });

  test("renders payment type and taxes value", () => {
    const paymentType = "credit";
    const taxesValue = "10";
    render(
      <DisplayResults
        totalAmount={0}
        taxesValue={taxesValue}
        paymentType={paymentType}
        exchangeRate={0}
        onReset={() => {}}
      />
    );
    const paymentTypeElement = screen.getByText(
      new RegExp(`Compra no ${paymentType}`, "i")
    );
    const taxesValueElement = screen.getByText(
      new RegExp(`taxa de ${taxesValue}%`, "i")
    );
    expect(paymentTypeElement).toBeInTheDocument();
    expect(taxesValueElement).toBeInTheDocument();
  });
});
