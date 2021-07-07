import styled from 'styled-components';
import { PrettyDecentMenu } from '../PrettyDecentMenu';
export const StyledMenu = styled(PrettyDecentMenu) `
    position: relative;
    padding: 4px;
    border-radius: 5px 5px 0 0;
    margin: 0 4px;
    background: #f3f3f3;
    border: 2px solid #eee;
    display: grid;
    grid-template-columns: auto 1fr;

    @media (max-width: 768px) {
        grid-template-columns: unset;
        display: grid;
        grid-row: 2;
    }
`;
