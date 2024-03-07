import {
  ContainerDisplayResults,
  ButtonReturn,
  SectionResult,
  LabelResult,
  InfoTaxes,
  InfoCurrency,
  ShowResult,
} from "./styles";
import { DisplayResultsProps } from "@/app/interfaces/DisplayResults";

const DisplayResults: React.FC<DisplayResultsProps> = ({
  totalAmount,
  onReset,
  paymentType,
  exchangeRate,
  taxesValue,
}) => {
  return (
    <ContainerDisplayResults>
      <ButtonReturn onClick={onReset}>Voltar</ButtonReturn>
      <SectionResult>
        <LabelResult>O resultado do cálculo é:</LabelResult>
        <ShowResult>
          {totalAmount !== null
            ? `R$ ${totalAmount.toFixed(2)}`
            : "Nenhum resultado disponível"}
        </ShowResult>
        <InfoTaxes>
          Compra no {paymentType} e taxa de {taxesValue}%
        </InfoTaxes>
        <InfoCurrency>
          Cotação do dólar: $1,00 = R$ {exchangeRate?.toFixed(2)}`
        </InfoCurrency>
      </SectionResult>
    </ContainerDisplayResults>
  );
};

export default DisplayResults;
