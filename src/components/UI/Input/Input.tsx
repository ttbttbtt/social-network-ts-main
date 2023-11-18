// import React from "react";
import {
  ErrorMessage,
  InputContainer,
  StyledInput,
} from "../Input/Input.style";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // type, placeholder - уже есть в InputHTMLAttributes
  errorMessage?: string;
  isError: boolean;
}

export const Input = ({
  type,
  placeholder,
  errorMessage,
  isError,
}: IInputProps) => {
  return (
    <InputContainer>
      <StyledInput type={type} placeholder={placeholder} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
