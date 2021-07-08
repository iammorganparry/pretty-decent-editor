// TypeScript Users only add this code
import { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';

type OrNull<T> = T | null;

type PrettyDecentBlockTypes =
    | 'attachment'
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
type PrettyDecentEditorChangeDTO = {
    children: PrettyDecentChildren[];
    toString: () => string;
    toEncodedString: () => string;
    toHTML: () => string;
};

type PrettyDecentFile = {
    id: string;
    file: File;
};
interface PrettyDecentChildren {
    text?: string;
    marks?: [];
    bold?: boolean;
    italic?: boolean;
    file?: File;
    code?: boolean;
    underline?: boolean;
    url?: string;
    strikethrough?: boolean;
    type?: PrettyDecentElementTypes;
    children?: PrettyDecentChildren[];
}

type PrettyDecentElement = PrettyDecentChildren;
type PrettyDecentEditor = BaseEditor &
    ReactEditor & {
        toggleMark: (editor: PrettyDecentEditor, mark: PrettyDecentMarkTypes) => void;
    };

declare module 'slate' {
    interface CustomTypes {
        Editor: PrettyDecentEditor;
        Element: PrettyDecentElement;
        Text: PrettyDecentChildren;
    }
}
