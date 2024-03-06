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
  return (
    <ContainerCurrencyCard>
      <FormBank>
        <FieldCurrency>
          <LabelCurrency>Dólar</LabelCurrency>
          <InputCurrency type={"text"} />
        </FieldCurrency>
        <FieldTaxes>
          <LabelTaxes>Taxas</LabelTaxes>
          <InputTaxes type={"text"} />
        </FieldTaxes>
      </FormBank>
      <RadioBlock>
        <LabelRadio>Tipo de compra</LabelRadio>
        <SectionInput>
          <InputCash type={"checkbox"} name={"Dinheiro"} className={"cash"} />
          <label>Dinheiro</label>
          <InputCard type={"checkbox"} name={"Cartão"} />
          <label>Cartão</label>
        </SectionInput>
      </RadioBlock>
      <Button>Converter</Button>
    </ContainerCurrencyCard>
  );
};

export default CurrencyCard;
