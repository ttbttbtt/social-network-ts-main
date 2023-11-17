import React from "react";
import { StyledInput } from "../Input/Input.style";

interface InputProps {
    type: string;
    placeholder: string;
}


export const Input = ({type, placeholder}: InputProps) => {
    return (
        <StyledInput type={type} placeholder={placeholder} />
    )
}