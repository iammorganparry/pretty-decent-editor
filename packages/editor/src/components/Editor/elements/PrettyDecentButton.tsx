import React, { PropsWithChildren, useCallback } from "react";
import { Tooltip, TooltipProps } from "react-tippy";
import { Editor, Element, Transforms } from "slate";
import { useSlate } from "slate-react";
import styled, { css } from "styled-components";
import { PrettyDecentEditor, PrettyDecentBlockTypes, PrettyDecentMarkTypes, PrettyDecentElement, PrettyDecentChildren } from "../../../../slate";

type StyledBtnProps = {
    active: boolean
    reversed?: boolean
}

const StyledBtn = styled.button<StyledBtnProps>`
${({ reversed, active }) => css`
    outline: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: unset;
    color: ${reversed ? active ? 'white' : '#aaa' : active ? 'black' : '#a9a9a9'};
`}         
`

const isMarkActive = (editor: PrettyDecentEditor, format: PrettyDecentMarkTypes) => {
    const marks = Editor.marks(editor) as PrettyDecentChildren
    return marks ? marks[format] === true : false
}

const toggleMark = (editor: PrettyDecentEditor, format: PrettyDecentMarkTypes) => {
    const isActive = isMarkActive(editor, format as PrettyDecentMarkTypes)
    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const isBlockActive = (editor: PrettyDecentEditor, format: PrettyDecentBlockTypes) => {
    const [match] = Editor.nodes(editor, {
        match: n =>
            !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    })

    return !!match
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const toggleBlock = (editor: PrettyDecentEditor, format: PrettyDecentBlockTypes) => {
    const isActive = isBlockActive(editor, format)
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
        match: n =>
            LIST_TYPES.includes(!Editor.isEditor(n) && Element.isElement(n) ? n.type : ''),
        split: true,
    })
    const newProperties: Partial<PrettyDecentElement> = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    }
    Transforms.setNodes(editor, newProperties)

    if (!isActive && isList) {
        const block = { type: format, children: [] }
        Transforms.wrapNodes(editor, block)
    }
}

export type PrettyDecentButtonProps = {
    format: PrettyDecentMarkTypes | PrettyDecentBlockTypes
    type: 'block' | 'mark'
    tooltipProps: TooltipProps
    onClick?: () => void
}

export const PrettyDecentButton = ({ format, children, type, tooltipProps, onClick }: PropsWithChildren<PrettyDecentButtonProps>) => {
    const editor = useSlate()
    const handleClick = useCallback((event: React.MouseEvent) => {
        if (onClick) {
            onClick()
        } else {
            event.preventDefault()
            switch (type) {
                case 'block':
                    toggleBlock(editor, format as PrettyDecentBlockTypes)
                    break;
                default:
                    toggleMark(editor, format as PrettyDecentMarkTypes)
                    break;
            }
        }
    }, [format, editor])

    const checkActive = useCallback((type: 'block' | 'mark') => {
        switch (type) {
            case 'block':
                return isBlockActive(editor, format as PrettyDecentBlockTypes)
            default:
                return isMarkActive(editor, format as PrettyDecentMarkTypes)
        }
    }, [format, editor, isBlockActive, isMarkActive])

    return (
        <Tooltip
            position='top'
            distance={20}
            {...tooltipProps}>
            <StyledBtn
                active={checkActive(type)}
                onClick={handleClick}
            >
                {children}
            </StyledBtn>
        </Tooltip >
    )
}