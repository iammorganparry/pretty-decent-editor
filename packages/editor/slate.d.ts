// TypeScript Users only add this code
import { BaseEditor, Descendant } from 'slate';
import { ReactEditor } from 'slate-react';

type OrNull<T> = T | null;

type PrettyDecentBlockTypes =
    | 'paragraph'
    | 'block-quote'
    | 'bulleted-list'
    | 'heading-one'
    | 'heading-two'
    | 'list-item'
    | 'numbered-list'
    | 'paragraph'
    | 'image'
    | 'code'
    | 'table'
    | 'table-row'
    | 'table-col'
    | 'table-cell'
    | 'link'
    | 'heading-three'
    | 'heading-four'
    | 'heading-five'
    | 'heading-six';

type PrettyDecentToolbarOption =
    | Exclude<
          PrettyDecentBlockTypes,
          | 'table-row'
          | 'heading-one'
          | 'heading-two'
          | 'table-row'
          | 'table-col'
          | 'table-cell'
          | 'heading-three'
          | 'heading-four'
          | 'heading-five'
          | 'heading-six'
          | 'paragraph'
          | 'list-item'
      >
    | PrettyDecentMarkTypes;
type PrettyDecentButtonTypes = 'mark' | 'block';
type PrettyDecentMarkTypes = 'bold' | 'italic' | 'strikethrough' | 'underline';
type PrettyDecentElementTypes = PrettyDecentBlockTypes | PrettyDecentMarkTypes;

interface PrettyDecentChildren {
    text: string;
    marks?: [];
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    type?: PrettyDecentElementTypes;
    children?: PrettyDecentChildren[];
}

type PrettyDecentElement =
    | { type: PrettyDecentElementTypes; children: PrettyDecentChildren[]; url?: string }
    | PrettyDecentChildren;
type PrettyDecentEditor = BaseEditor & ReactEditor;

declare module 'slate' {
    interface CustomTypes {
        Editor: PrettyDecentEditor;
        Element: PrettyDecentElement;
        Text: PrettyDecentChildren;
    }
}
