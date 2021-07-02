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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const StyledSlate = styled(Slate)`
    height: 350px;
`;

export const EditorContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;
