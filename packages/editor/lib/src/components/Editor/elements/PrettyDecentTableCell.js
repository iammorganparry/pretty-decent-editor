import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';
export const StyledTd = styled.td `
    max-height: 100px;
    min-width: 50px;
    height: 75px;
    width: 150px;
    border: 1px solid #eee;
`;
export const PrettyDecentTableCell = forwardRef(({ children, ...others }, ref) => {
    return (React.createElement(StyledTd, { ...others, ref: ref }, children));
});
PrettyDecentTableCell.displayName = 'PrettyDecentTableCell';
