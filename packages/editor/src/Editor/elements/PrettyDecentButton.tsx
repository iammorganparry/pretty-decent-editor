import React, { ForwardedRef, PropsWithChildren, useCallback } from "react";
import { Editor, Element, Transforms } from "slate";
import { useSlate } from "slate-react";
import styled, { css } from "styled-components";
import { PrettyDecentEditor, PrettyDecentBlockTypes, PrettyDecentMarkTypes, PrettyDecentElement } from "../../../slate";

type PrettyDecentButtonWrapperProps = React.HTMLAttributes<HTMLButtonElement> & {
    active?: boolean
    reversed?: boolean
    format: PrettyDecentMarkTypes | PrettyDecentBlockTypes
    className?: string
}
export const Button = React.forwardRef(({ className, children, ...props }: PropsWithChildren<PrettyDecentButtonWrapperProps>, ref: ForwardedRef<HTMLButtonElement>) => (
    <StyledBtn
        {...props}
        ref={ref}
        className={className}
    >{children}</StyledBtn>
)
)

const StyledBtn = styled.button<PrettyDecentButtonWrapperProps>`
${({ reversed, active }) => css`
    outline: none;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: ${reversed ? active ? 'white' : '#aaa' : active ? 'black' : '#ccc'};
`}         
`

const isMarkActive = (editor: PrettyDecentEditor, format: PrettyDecentMarkTypes) => {
    const marks = Editor.marks(editor)
    console.log({ marks })
    //@ts-ignore
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
            LIST_TYPES.includes((!Editor.isEditor(n) && Element.isElement(n) && n.type)),
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

type PrettyDecentButtonProps = {
    format: PrettyDecentMarkTypes | PrettyDecentBlockTypes
    type: 'block' | 'mark'
}

export const PrettyDecentButton = ({ format, children, type }: PropsWithChildren<PrettyDecentButtonProps>) => {
    const editor = useSlate()
    const handleClick = useCallback((event: React.MouseEvent) => {
        event.preventDefault()
        switch (type) {
            case 'block':
                toggleBlock(editor, format as PrettyDecentBlockTypes)
                break;
            default:
                toggleMark(editor, format as PrettyDecentMarkTypes)
                break;
        }
    }, [format, editor])

    const checkActive = useCallback(() => {
        switch (type) {
            case 'block':
                return isMarkActive(editor, format as PrettyDecentMarkTypes)
            default:
                return isBlockActive(editor, format as PrettyDecentBlockTypes)
        }
    }, [format, editor, type])

    return (
        <Button
            format={format}
            active={checkActive()}
            onClick={handleClick}
        >
            {children}
        </Button>
    )
}