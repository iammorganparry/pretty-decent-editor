import React from 'react';
import { StyledMenu } from './styles';
import { PrettyDecentToolbarContextProvider } from './context';
export type PrettyDecentToolbarProps = {
    className?: string;
    children: React.ReactElement | React.ReactElement[];
};
export const PrettyDecentToolbar = ({ className, children, ...props }: PrettyDecentToolbarProps): JSX.Element => {
    return (
        <PrettyDecentToolbarContextProvider>
            <StyledMenu {...props} className={className}>
                {children}
            </StyledMenu>
        </PrettyDecentToolbarContextProvider>
    );
};
