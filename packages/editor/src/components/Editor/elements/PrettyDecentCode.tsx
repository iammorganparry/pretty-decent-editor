import React from 'react';
import styled from 'styled-components';

type PrettyDecentCodeProps = {
    children: React.ReactElement;
};
export const PrettyDecentCode = ({ children }: PrettyDecentCodeProps): JSX.Element => {
    return (
        <CodePalette>
            <code>{children}</code>
        </CodePalette>
    );
};

export const CodePalette = styled.pre`
    background: #bdbdbd30;
    padding: 24px;
    border-radius: 10px;
    color: #000;
    font-family: 'Monaco' monospace;
    font-style: normal;
    font-weight: normal;
`;
