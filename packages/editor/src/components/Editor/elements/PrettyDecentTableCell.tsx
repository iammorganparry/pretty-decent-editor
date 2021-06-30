import React from 'react'
import { ForwardedRef, forwardRef } from "react"
import { RenderElementProps } from 'slate-react'
import styled from "styled-components"

export const StyledTd = styled.td`
    max-height: 100px;
    min-width: 150px;
    height: 75px;
    border: 1px solid #eee;
    `

type PrettyDecentTableCellProps = {
    children: React.ReactElement
}
export const PrettyDecentTableCell = forwardRef(({ children, ...others }: PrettyDecentTableCellProps, ref: ForwardedRef<HTMLTableCellElement>) => {

    return <StyledTd {...others}>{children}</StyledTd>
})

PrettyDecentTableCell.displayName = 'PrettyDecentTableCell'