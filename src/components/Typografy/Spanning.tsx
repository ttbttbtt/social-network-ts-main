import React from "react"

type SpanningProps = {
    spanningText: string
}

export const Spanning = ({ spanningText }: SpanningProps) => {
    return (
        <span>{spanningText}</span>
    )
}