import React from 'react';
import { BiChevronDown, BiText, BiChevronUp } from 'react-icons/bi';
import { useMedia } from 'react-use';
import styled from 'styled-components';
import { StyledBtn } from '../PrettyDecentButton';
import { usePrettyDecentToolbarContext } from './hook';
type PrettyDecentBlockToolbarProps = {
    children: React.ReactElement;
};

export const PrettyDecentBlockToolbar = ({ children }: PrettyDecentBlockToolbarProps): JSX.Element => {
    const isMobile = useMedia('(max-width: 480px)');
    const { setOpen, open } = usePrettyDecentToolbarContext();
    const handleClick = () => setOpen((ps) => !ps);
    return (
        <StyledToolbar>
            {isMobile && (
                <StyledBtn active={false} onClick={handleClick}>
                    <BiText />
                    {open ? <BiChevronUp /> : <BiChevronDown />}
                </StyledBtn>
            )}
            {children}
        </StyledToolbar>
    );
};

const StyledToolbar = styled.div`
    order: 2;
    @media (max-width: 768px) {
        border-right: unset;
        order: 1;
    }
`;
