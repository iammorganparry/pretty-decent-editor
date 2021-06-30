import React, { ForwardedRef, PropsWithChildren } from "react";
import styled from "styled-components";
import { PrettyDecentProps } from "..";

export const PrettyDecentIcon = 
    ({ className, children, ...props }: PropsWithChildren<PrettyDecentProps>) => (
        <StyledIcon
            {...props}
            className={`material-icons ${className}`}
        >{children}</StyledIcon>
    )

PrettyDecentIcon.displayName = 'PrettyDecentIcon'

const StyledIcon = styled.span`
    font-size: 40px;
    width: 20px;
    height: 20px;
    vertical-align: text-bottom;
`