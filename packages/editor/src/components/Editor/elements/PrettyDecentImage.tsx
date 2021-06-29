import React, { PropsWithChildren } from 'react'
import { RenderElementProps, useFocused, useSelected } from "slate-react"
import styled, { css } from 'styled-components'

export const PrettyDecentImage = ({ attributes, children, element }: PropsWithChildren<RenderElementProps>) => {
    const selected = useSelected()
    const focused = useFocused()
    return (
        <div {...attributes}>
            {children}
            <StyledImage
                selected={selected}
                focused={focused}
                src={element.url}
            />
        </div>
    )
}

type StyledImageProps = {
    selected?: boolean
    focused?: boolean
}
export const StyledImage = styled.img<StyledImageProps>`
${({ selected, focused }) => css`
    display: block;
    max-width: 100%;
    max-height: 20em;
    box-shadow: ${selected && focused ? '0 0 0 2px blue;' : 'none'};
`}
`
