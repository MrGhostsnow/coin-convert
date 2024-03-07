export interface InputDataProps {
    currencyValue: string;
    taxesValue: string;
    paymentType: string;
    errorMessages: {
       currency: string;
       taxes: string;
       paymentType: string;
    };
    handleCurrencyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleTaxesChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handlePaymentTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   }