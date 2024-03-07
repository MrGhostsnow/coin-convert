// HomePage.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "."; // Ajuste o caminho conforme necessário

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
    expect(screen.getByText("Dólar")).toBeInTheDocument(); // Supondo que 'Dólar' seja um texto dentro do CurrencyCard
  });

  it("displays CurrencyCard when totalAmount is null", () => {
    render(<HomePage />);
    expect(screen.getByText("Dólar")).toBeInTheDocument(); // Supondo que 'Dólar' seja um texto dentro do CurrencyCard
  });

  // Adicione mais testes conforme necessário
});
