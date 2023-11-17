import React from "react"

type StyledLinkProps = {
    LinkText: string
}

export const StyledLink = ({ LinkText }: StyledLinkProps) => {
    return (
        <a>{LinkText}</a>
    )
}