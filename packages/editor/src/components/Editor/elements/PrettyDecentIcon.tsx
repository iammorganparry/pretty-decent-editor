import React, { ForwardedRef, PropsWithChildren } from "react";
import styled from "styled-components";
import { PrettyDecentProps } from "..";

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
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
`