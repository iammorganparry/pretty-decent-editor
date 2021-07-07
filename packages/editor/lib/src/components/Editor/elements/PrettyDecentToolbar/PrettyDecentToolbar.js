import React from 'react';
import { StyledMenu } from './styles';
import { PrettyDecentToolbarContextProvider } from './context';
export const PrettyDecentToolbar = ({ className, children, ...props }) => {
    return (React.createElement(PrettyDecentToolbarContextProvider, null,
        React.createElement(StyledMenu, { ...props, className: className }, children)));
};
