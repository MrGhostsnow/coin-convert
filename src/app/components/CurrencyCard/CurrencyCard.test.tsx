import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import CurrencyCard from ".";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("CurrencyCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        USDBRL: {
          bid: "5.00",
        },
      },
    });

    render(
      <CurrencyCard
        onTotalAmountChange={() => {}}
        onTaxesValueChange={() => {}}
        onPaymentTypeChange={() => {}}
        onExchangeRateChange={() => {}}
      />
    );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText("Dólar")).toBeInTheDocument();
  });

  it("fetches exchange rate on mount", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        USDBRL: {
          bid: "5.00",
        },
      },
    });

    render(
      <CurrencyCard
        onTotalAmountChange={() => {}}
        onTaxesValueChange={() => {}}
        onPaymentTypeChange={() => {}}
        onExchangeRateChange={() => {}}
      />
    );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://economia.awesomeapi.com.br/last/USD-BRL"
    );
  });

  it("handles currency input change", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        USDBRL: {
          bid: "5.00",
        },
      },
    });

    render(
      <CurrencyCard
        onTotalAmountChange={() => {}}
        onTaxesValueChange={() => {}}
        onPaymentTypeChange={() => {}}
        onExchangeRateChange={() => {}}
      />
    );

    await waitFor(() => expect(mockedAxios.get).toHaveBeenCalledTimes(1));
    const input = screen.getByTestId("Dólar") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "$10" } });
    expect(input.value).toBe("$10");
  });
});
