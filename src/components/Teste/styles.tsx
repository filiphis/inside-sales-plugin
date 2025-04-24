import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  background-color: #f0f0f0;
`;

export const PrimaryButton = styled(Button)`
  color: red;

  &:hover {
    filter: brightness(1.05);
  }
`;
