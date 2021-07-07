import React from 'react';
import styled from 'styled-components';
export const PrettyDecentMenu = ({ className, ...props }) => (React.createElement(StyledMenu, { ...props, className: className }));
PrettyDecentMenu.displayName = 'PrettyDecentMenu';
const StyledMenu = styled.div `
    transition: height 1s linear;
    & > * {
        display: inline-block;
    }
    & > * + * {
        margin-left: 5px;
    }
`;
