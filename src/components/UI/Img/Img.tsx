import React from "react";
import { StyledImg } from "../Img/Img.style";

interface ImgProps {
    src: string;
    alt: string;
}


export const Img = ({src, alt}: ImgProps) => {
    return (
        <StyledImg src={src} alt={alt} />
    )
}