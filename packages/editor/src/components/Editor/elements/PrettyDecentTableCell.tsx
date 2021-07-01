import React from 'react';
import { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

export const StyledTd = styled.td`
    max-height: 100px;
    min-width: 50px;
    height: 75px;
    width: 150px;
    border: 1px solid #eee;
`;

type PrettyDecentTableCellProps = {
    children: React.ReactElement;
};
export const PrettyDecentTableCell = forwardRef(
    ({ children, ...others }: PrettyDecentTableCellProps, ref: ForwardedRef<HTMLTableCellElement>): JSX.Element => {
        return (
            <StyledTd {...others} ref={ref}>
                {children}
            </StyledTd>
        );
    },
);

PrettyDecentTableCell.displayName = 'PrettyDecentTableCell';
