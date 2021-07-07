import React from 'react';
import { BiChevronDown, BiText, BiChevronUp } from 'react-icons/bi';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { StyledBtn } from '../PrettyDecentButton';
import { usePrettyDecentToolbarContext } from './hook';
export const PrettyDecentBlockToolbar = ({ children }) => {
    const isMobile = useMedia('(max-width: 768px');
    const { setOpen, open } = usePrettyDecentToolbarContext();
    const handleClick = () => setOpen((ps) => !ps);
    return (React.createElement(StyledToolbar, null,
        isMobile && (React.createElement(StyledBtn, { active: false, onClick: handleClick },
            React.createElement(BiText, null),
            open ? React.createElement(BiChevronDown, null) : React.createElement(BiChevronUp, null))),
        children));
};
const StyledToolbar = styled.div `
    order: 2;
    @media (max-width: 768px) {
        border-right: unset;
        order: 1;
    }
`;
