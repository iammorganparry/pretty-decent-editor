import React, { forwardRef } from 'react';
import styled from 'styled-components';
export const PrettyDecentCode = forwardRef(({ children }, ref) => {
    return (React.createElement(CodePalette, { ref: ref },
        React.createElement("code", null, children)));
});
PrettyDecentCode.displayName = 'PrettyDecentCode';
export const CodePalette = styled.pre `
    padding: 24px;
    color: #000;
    font-family: 'Monaco' monospace;
    font-style: normal;
    font-weight: normal;
    max-width: 100%;
`;
