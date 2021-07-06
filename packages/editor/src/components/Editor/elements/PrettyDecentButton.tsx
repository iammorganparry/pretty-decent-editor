import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import { Editor, Element, Transforms } from 'slate';
import { ReactEditor, useSlate } from 'slate-react';
import styled, { css } from 'styled-components';
import {
    PrettyDecentEditor,
    PrettyDecentBlockTypes,
    PrettyDecentMarkTypes,
    PrettyDecentElement,
    PrettyDecentChildren,
} from '../../../../slate';
import { motion } from 'framer-motion';
type StyledBtnProps = {
    active: boolean;
    reversed?: boolean;
};

export const StyledBtn = styled(motion.button)<StyledBtnProps>`
    ${({ reversed, active }) => css`
        outline: none;
        border: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: unset;
        color: ${reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#a9a9a9'};
    `}
`;

export const isMarkActive = (editor: PrettyDecentEditor, format: PrettyDecentMarkTypes) => {
    const marks = Editor.marks(editor) as PrettyDecentChildren;
    return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: PrettyDecentEditor, format: PrettyDecentMarkTypes) => {
    editor.toggleMark(editor, format);
};

export const isBlockActive = (editor: PrettyDecentEditor, format: PrettyDecentBlockTypes): boolean => {
    const [match] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    });

    return !!match;
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export const toggleBlock = (editor: PrettyDecentEditor, format: PrettyDecentBlockTypes): void => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: (n) => LIST_TYPES.includes(!Editor.isEditor(n) && Element.isElement(n) ? n.type ?? '' : '' ?? ''),
        split: true,
    });
    const newProperties: Partial<PrettyDecentElement> = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

export type PrettyDecentButtonProps = {
    format: PrettyDecentMarkTypes | PrettyDecentBlockTypes;
    type: 'block' | 'mark';
    tooltipProps: TippyProps;
    onClick?: () => void;
    children: React.ReactElement | null;
};

export const PrettyDecentButton = ({
    format,
    children,
    type,
    tooltipProps,
    onClick,
    ...others
}: PrettyDecentButtonProps): JSX.Element => {
    const editor = useSlate();
    const checkActive = (type: 'block' | 'mark') => {
        switch (type) {
            case 'block':
                return isBlockActive(editor, format as PrettyDecentBlockTypes);
            default:
                return isMarkActive(editor, format as PrettyDecentMarkTypes);
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
                toggleBlock(editor, format as PrettyDecentBlockTypes);
                ReactEditor.focus(editor);
                break;
            default:
                toggleMark(editor, format as PrettyDecentMarkTypes);
                ReactEditor.focus(editor);
                break;
        }
    };

    return (
        <Tippy placement="top" {...tooltipProps}>
            <StyledBtn
                data-toggled={isActive}
                active={isActive}
                onClick={handleClick}
                {...others}
                whileTap={{ scale: 1.8 }}
                whileHover={{ scale: 1.2 }}
            >
                {children}
            </StyledBtn>
        </Tippy>
    );
};
