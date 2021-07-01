import { Editable, Slate } from 'slate-react';
import styled from 'styled-components';

export const StyledSlateEditor = styled(Editable)`
    border-radius: 0 0 5px 5px;
    padding: 24px;
    margin: 0 4px;
    background: #fff;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;

export const StyledSlate = styled(Slate)`
    height: 350px;
`;

export const EditorContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;
