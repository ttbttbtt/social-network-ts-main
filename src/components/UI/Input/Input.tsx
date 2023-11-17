// import React from "react";
import {
  ErrorMessage,
  InputContainer,
  StyledInput,
} from "../Input/Input.style";

// interface InputProps {
//     type: string;
//     placeholder: string;
// }

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError: boolean
}

// export const Input = ({type, placeholder}: InputProps) => {
//     return (
//         <StyledInput type={type} placeholder={placeholder} />
//     )
// }

export const Input = ({ type, placeholder, errorMessage, isError }: IInputProps) => {
  return (
    <InputContainer>
      <StyledInput type={type} placeholder={placeholder} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
