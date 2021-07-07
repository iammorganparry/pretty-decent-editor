import React from 'react';
import styled from 'styled-components';
export const PrettyDecentBlockQuote = ({ children }) => {
    return React.createElement(StyledQuote, null, children);
};
const StyledQuote = styled.blockquote `
    border-left: 5px solid #eee;
    padding-left: 8px;
`;
