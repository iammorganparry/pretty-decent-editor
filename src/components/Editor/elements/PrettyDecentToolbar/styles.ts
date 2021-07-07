import styled from 'styled-components';
import { PrettyDecentMenu } from '../PrettyDecentMenu';

export const StyledMenu = styled(PrettyDecentMenu)`
    position: relative;
    padding: 4px;
    border-radius: 5px 5px 0 0;
    margin: 0 4px;
    background: #fff;
    border: 1px solid #000;
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: 768px) {
        grid-template-columns: unset;
        display: grid;
        grid-row: 2;
    }
`;
