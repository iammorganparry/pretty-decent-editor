import React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';
export const PrettyDecentTable = forwardRef(({ children, ...others }, ref) => {
    return (React.createElement(StyledTable, { ref: ref, ...others },
        React.createElement("tbody", null, children)));
});
PrettyDecentTable.displayName = 'PrettyDecentTable';
const StyledTable = styled.table `
    border-collapse: collapse;
    td,
    tr {
        resize: horizontal;
        overflow: auto;
    }
`;
