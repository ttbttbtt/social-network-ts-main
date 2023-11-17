import styled from "styled-components";

interface StyledInputProps {}

export const StyledInput = styled.input<StyledInputProps>`
  padding: 12px 15px;
  background-color: var(--bgc);
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: var(--prime-color);
  }

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
