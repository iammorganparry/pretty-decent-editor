import React, { ForwardedRef, MutableRefObject, PropsWithChildren } from "react";
import { PrettyDecentProps } from "Editor";
import { PrettyDecentMenu } from "./PrettyDecentMenu";
import styled from "styled-components";
export const PrettyDecentToolbar = React.forwardRef(({ className, ...props }: PropsWithChildren<PrettyDecentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <StyledMenu
        {...props}
        ref={ref}
        className={className}
    />
)
)

const StyledMenu = styled(PrettyDecentMenu)`
    position: relative;
    padding: 1px 18px 17px;
    margin: 0 20px;
    border-bottom: 2px solid #eee;
    margin-bottom: 20px;   
`