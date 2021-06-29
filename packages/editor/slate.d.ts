// TypeScript Users only add this code
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

type OrNull<T> = T | null

type PrettyDecentBlockTypes =
    'paragraph' |
    'block-quote' |
    'bulleted-list' |
    'heading-one' |
    'heading-two' |
    'list-item' |
    'numbered-list' |
    'paragraph' |
    'image' |
    'code' |
    'table' |
    'table-row' |
    'table-col' |
    'table-cell' |
    'link' |
    "heading-three" |
    "heading-four" |
    "heading-five" |
    "heading-six"


type PrettyDecentMarkTypes = 'bold' | 'italic' | 'strikethrough' | 'underline'
type PrettyDecentElementTypes = PrettyDecentBlockTypes

interface PrettyDecentChildren {
    text: string,
    marks?: [],
    bold?: boolean,
    italic?: boolean,
    code?: boolean
    underline?: boolean
    strikethrough?: boolean
}

type PrettyDecentElement = { type: PrettyDecentBlockTypes; children: PrettyDecentChildren[], url?: string }
type PrettyDecentEditor = BaseEditor & ReactEditor

declare module 'slate' {
    interface CustomTypes {
        Editor: PrettyDecentEditor
        Element: PrettyDecentElement
        Text: PrettyDecentChildren
    }
}