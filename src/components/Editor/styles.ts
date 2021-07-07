import { motion } from 'framer-motion';
import { Editable, Slate } from 'slate-react';
import styled from 'styled-components';

export const StyledSlateEditor = styled(Editable)`
    border-radius: 0 0 5px 5px;
    padding: 24px;
    margin: 0 4px;
    max-width: 100%;
    height: 100%;
    background: #fff;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
`;

export const StyledSlate = styled(Slate)`
    height: 100%;
`;

export const EditorContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    position: relative;
    opacity: 0;
    flex-direction: column;
`;
