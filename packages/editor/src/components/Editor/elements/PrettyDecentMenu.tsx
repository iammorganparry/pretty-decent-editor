import { PrettyDecentProps } from "components/Editor";
import React, { ForwardedRef, PropsWithChildren } from "react";
import styled from "styled-components";

export const PrettyDecentMenu = React.forwardRef(({ className, ...props }: PropsWithChildren<PrettyDecentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <StyledMenu
        {...props}
        ref={ref}
        className={className}
    />
)
)

PrettyDecentMenu.displayName = 'PrettyDecentMenu'

const StyledMenu = styled.div`
    & > * {
            display: inline-block;
        }
    & > * + * {
        margin-left: 5px;
    }
`


