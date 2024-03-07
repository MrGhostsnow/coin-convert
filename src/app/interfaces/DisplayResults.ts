export interface DisplayResultsProps {
    totalAmount: number | null;
    taxesValue: string | null;
    paymentType: string | null;
    exchangeRate: number | null;
    onReset: () => void;
   }