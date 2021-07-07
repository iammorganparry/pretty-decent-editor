import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { usePrettyDecentToolbarContext } from './hook';
export const PrettyDecentMarkToolbar = ({ children }) => {
    const isMobile = useMedia('(max-width: 768px');
    const { open } = usePrettyDecentToolbarContext();
    return (React.createElement(AnimatePresence, null,
        open && (React.createElement(StyledMarkToolbar, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 40 }, exit: { opacity: 0, height: 0 } }, children)),
        ";"));
};
export const StyledMarkToolbar = styled(motion.div) `
    border-right: 2px solid #cccccc30;
    order: 1;
    @media (max-width: 768px) {
        border-right: unset;
        order: 2;
    }
`;
