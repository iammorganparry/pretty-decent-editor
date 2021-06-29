import React from 'react'
import { ForwardedRef } from "react"
import { forwardRef, PropsWithChildren } from "react"
import styled from "styled-components"

type PrettyDecentTableProps = React.HTMLAttributes<HTMLTableElement> & {}

export const PrettyDecentTable = forwardRef(({ children, ...others }: PropsWithChildren<PrettyDecentTableProps>, ref: ForwardedRef<HTMLTableElement>) => {

    return (
        <StyledTable ref={ref} {...others}>
            <tbody>
                {children}
            </tbody>
        </StyledTable>
    )
})

const StyledTable = styled.table`
    border: 1px solid black;
`