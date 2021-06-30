import React from 'react'
import { ForwardedRef } from "react"
import { forwardRef, PropsWithChildren } from "react"
import styled from "styled-components"

type PrettyDecentTableProps = React.HTMLAttributes<HTMLTableElement> & {
    children: React.ReactElement
}

export const PrettyDecentTable = forwardRef(({ children, ...others }: PrettyDecentTableProps, ref: ForwardedRef<HTMLTableElement>) => {

    return (
        <StyledTable ref={ref} {...others}>
            <tbody>
                {children}
            </tbody>
        </StyledTable>
    )
})

PrettyDecentTable.displayName = 'PrettyDecentTable'

const StyledTable = styled.table`
`