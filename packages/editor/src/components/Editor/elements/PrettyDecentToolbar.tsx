import React, { ForwardedRef, MutableRefObject, PropsWithChildren } from "react";
import { PrettyDecentProps } from "components/Editor";
import { PrettyDecentMenu } from "./PrettyDecentMenu";
import styled from "styled-components";
export const PrettyDecentToolbar = ({ className, ...props }: PropsWithChildren<PrettyDecentProps>) => (
    <StyledMenu
        {...props}
        className={className}
    />
)

const StyledMenu = styled(PrettyDecentMenu)`
    position: relative;
    padding: 4px;
    border-radius: 5px 5px 0 0;
    margin: 0 4px;
    background: #f3f3f3;
    border: 2px solid #eee;
`