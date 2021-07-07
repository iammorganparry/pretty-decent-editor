import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { PrettyDecentToolbarProps } from './PrettyDecentToolbar/PrettyDecentToolbar';

export const PrettyDecentMenu = ({ className, ...props }: PrettyDecentToolbarProps) => (
    <StyledMenu {...props} className={className} />
);

PrettyDecentMenu.displayName = 'PrettyDecentMenu';

const StyledMenu = styled.div`
    transition: height 1s linear;
    & > * {
        display: inline-block;
    }
    & > * + * {
        margin-left: 5px;
    }
`;
