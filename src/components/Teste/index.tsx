import { type TesteProps } from "./types";
import * as S from "./styles.tsx";

export const Teste = ({ componentName }: TesteProps) => {
  return (
    <S.Container>
      <h2>Component {componentName}</h2>
      <S.PrimaryButton>Primary Button</S.PrimaryButton>
    </S.Container>
  );
};
