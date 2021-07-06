import React, { forwardRef } from 'react';
import styled from 'styled-components';

type PrettyDecentCodeProps = {
    children: React.ReactElement;
};
export const PrettyDecentCode = forwardRef<HTMLPreElement, PrettyDecentCodeProps>(({ children }, ref) => {
    return (
        <CodePalette ref={ref}>
            <code>{children}</code>
        </CodePalette>
    );
});

PrettyDecentCode.displayName = 'PrettyDecentCode';

export const CodePalette = styled.pre`
    padding: 24px;
    color: #000;
    font-family: 'Monaco' monospace;
    font-style: normal;
    font-weight: normal;
    max-width: 100%;
`;
