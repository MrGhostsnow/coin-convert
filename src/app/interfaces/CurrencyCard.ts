export interface CurrencyCardProps {
    onTotalAmountChange: (amount: number) => void;
    onTaxesValueChange: (taxesValue: string) => void;
    onPaymentTypeChange: (paymentType: string) => void;
    onExchangeRateChange: (exchangeRate: number | null) => void;
   }
   
 export  interface CurrencyCardState {
    currencyValue: string;
    taxesValue: string;
    paymentType: string;
    exchangeRate: number | null;
    totalAmount: number | null;
    errorMessages: {
       currency: string;
       taxes: string;
       paymentType: string;
    };
   }
   