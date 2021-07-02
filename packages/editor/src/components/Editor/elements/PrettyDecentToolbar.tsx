import React from 'react';
import { PrettyDecentProps } from 'components/Editor';
import { PrettyDecentMenu } from './PrettyDecentMenu';
import styled from 'styled-components';

export type PrettyDecentToolbarProps = {
    className?: string;
    children: React.ReactElement[];
};
export const PrettyDecentToolbar = ({ className, children, ...props }: PrettyDecentToolbarProps) => (
    <StyledMenu {...props} className={className}>
        {children}
    </StyledMenu>
);

const StyledMenu = styled(PrettyDecentMenu)`
    position: relative;
    padding: 4px;
    border-radius: 5px 5px 0 0;
    margin: 0 4px;
    background: #f3f3f3;
    border: 2px solid #eee;
`;
