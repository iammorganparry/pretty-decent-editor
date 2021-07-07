import { Transforms } from 'slate';
import { PrettyDecentEditor } from '../../../../../slate';

export const insertImage = (editor: PrettyDecentEditor, file: string) => {
    Transforms.insertFragment(editor, [{ type: 'image', url: file, children: [{ text: '' }] }]);
};
