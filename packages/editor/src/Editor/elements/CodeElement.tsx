import React from 'react'
import { RenderElementProps } from 'slate-react'
export const CodeElement = (props: RenderElementProps) => {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}