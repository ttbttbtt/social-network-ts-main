import React from "react";
import { StyledButton } from "../Button/Button.style";
interface ButtonProps {
    buttonText: string
    isPrimary: boolean
}

export const Button = ({buttonText, isPrimary}: ButtonProps) => {
    return (
        <StyledButton $isPrimary={isPrimary}>
            {/* $isPrimary - $ - скрываем от браузера */}
            {buttonText}
        </StyledButton>
    )
}