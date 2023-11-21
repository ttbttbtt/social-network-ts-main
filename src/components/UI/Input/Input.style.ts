import { css, styled } from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: 10px;
`;

interface IStyledInputProps {
  $isError: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  outline: 0;
  font-family: inherit;
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  /* border: 1px solid transparent; */
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};

  ${(props) =>
    props.$isError &&
    css`
      border-color: ${(props) => props.theme.colors.red};
    `}

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;