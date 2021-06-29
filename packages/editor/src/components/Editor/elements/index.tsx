import React from 'react'
import { RenderElementProps } from 'slate-react'
import { PrettyDecentImage } from './PrettyDecentImage'
import { PrettyDecentTable } from './PrettyDecentTable'

export const PrettyDecentElements = ({ attributes, children, element }: RenderElementProps) => {
    switch (element.type) {
        case 'code':
            return <code {...attributes}>{children}</code>
        case 'table':
            return <PrettyDecentTable {...attributes}>{children}</PrettyDecentTable>
        case 'table-row':
            return <tr {...attributes}>{children}</tr>
        case 'table-col':
            return <td {...attributes}>{children}</td>
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>
        case 'heading-one':
            return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
            return <h2 {...attributes}>{children}</h2>
        case 'heading-three':
            return <h3 {...attributes}>{children}</h3>
        case 'heading-four':
            return <h4 {...attributes}>{children}</h4>
        case 'heading-five':
            return <h5 {...attributes}>{children}</h5>
        case 'heading-six':
            return <h6 {...attributes}>{children}</h6>
        case 'list-item':
            return <li {...attributes}>{children}</li>
        case 'numbered-list':
            return <ol {...attributes}>{children}</ol>
        case 'link':
            return (
                <a href={element.url} {...attributes}>
                    {children}
                </a>
            )
        case 'image':
            return <PrettyDecentImage attributes={attributes} element={element} >{children}</PrettyDecentImage>
        default:
            return <p {...attributes}>{children}</p>
    }
}