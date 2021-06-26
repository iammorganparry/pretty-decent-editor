import { PrettyDecentProps } from "Editor";
import React, { ForwardedRef, MutableRefObject, PropsWithChildren } from "react";
import styled from "styled-components";

export const PrettyDecentMenu = React.forwardRef(({ className, ...props }: PropsWithChildren<PrettyDecentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <StyledMenu
        {...props}
        ref={ref}
        className={className}
    />
)
)

const StyledMenu = styled.div`
    & > * {
            display: inline-block;
        }
    & > * + * {
        margin-left: 15px;
    }
`


