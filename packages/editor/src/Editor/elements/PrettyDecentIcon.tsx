import { PrettyDecentProps } from "Editor";
import React, { ForwardedRef, PropsWithChildren } from "react";
import styled from "styled-components";

export const PrettyDecentIcon = React.forwardRef(
    ({ className, children, ...props }: PropsWithChildren<PrettyDecentProps>, ref: ForwardedRef<HTMLSpanElement>) => (
        <StyledIcon
            {...props}
            ref={ref}
            className={`material-icons ${className}`}
        >{children}</StyledIcon>
    )
)

const StyledIcon = styled.span`
    font-size: 40px;
    vertical-align: text-bottom;
`