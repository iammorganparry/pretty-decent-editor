import React from 'react'
import { RenderElementProps } from 'slate-react'
import { CodeElement } from './CodeElement'

export const PrettyDecentElements = ({ attributes, children, element }: RenderElementProps) => {
    switch (element.type) {
        case 'code':
            return <code {...attributes}>{children}</code>
        case 'table':
            return <table {...attributes}>{children}</table>
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        default:
            return <p {...attributes}>{children}</p>
    }
}