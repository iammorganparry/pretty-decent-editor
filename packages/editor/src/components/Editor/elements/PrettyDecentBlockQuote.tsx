import React from 'react';
import styled from 'styled-components';
type PrettyDecentBlockQuoteProps = {
    children: React.ReactElement;
};
export const PrettyDecentBlockQuote = ({ children }: PrettyDecentBlockQuoteProps): JSX.Element => {
    return <StyledQuote>{children}</StyledQuote>;
};

const StyledQuote = styled.blockquote`
    border-left: 5px solid #eee;
    padding-left: 8px;
`;
