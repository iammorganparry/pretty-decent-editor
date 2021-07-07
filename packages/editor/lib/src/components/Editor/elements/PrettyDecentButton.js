import React from 'react';
import Tippy from '@tippyjs/react';
import { Editor, Element, Transforms } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
export const StyledBtn = styled(motion.button) `
    ${({ reversed, active }) => css `
        outline: none;
        border: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: unset;
        color: ${reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#a9a9a9'};
    `}
`;
export const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};
export const toggleMark = (editor, format) => {
    editor.toggleMark(editor, format);
};
export const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    });
    return !!match;
};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];
export const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);
    Transforms.unwrapNodes(editor, {
        match: (n) => LIST_TYPES.includes(!Editor.isEditor(n) && Element.isElement(n) ? n.type ?? '' : '' ?? ''),
        split: true,
    });
    const newProperties = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};
export const PrettyDecentButton = forwardRef(({ format, children, type, tooltipProps, onClick, ...others }, ref) => {
    const editor = useSlate();
    const checkActive = (type) => {
        switch (type) {
            case 'block':
                return isBlockActive(editor, format);
            default:
                return isMarkActive(editor, format);
        }
    };
    const isActive = checkActive(type);
    const handleClick = () => {
        if (!isActive && onClick) {
            onClick();
            ReactEditor.focus(editor);
            return;
        }
        switch (type) {
            case 'block':
                toggleBlock(editor, format);
                ReactEditor.focus(editor);
                break;
            default:
                toggleMark(editor, format);
                ReactEditor.focus(editor);
                break;
        }
    };
    return (React.createElement(Tippy, { placement: "top", ...tooltipProps },
        React.createElement(StyledBtn, { ref: ref, "data-toggled": isActive, active: isActive, onClick: handleClick, ...others, whileTap: { scale: 1.8 }, whileHover: { scale: 1.2 } }, children)));
});
PrettyDecentButton.displayName = 'PrettyDecentButton';
