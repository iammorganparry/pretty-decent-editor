import { Editor } from 'slate';
import { ReactEditor } from 'slate-react';
import * as editorUtils from '../utils/editorUtils';
//@ts-ignore
export const PDEditor = {
    ...ReactEditor,
    ...Editor,
    ...editorUtils,
};
