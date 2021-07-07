import { isMarkActive } from 'components/Editor/elements/PrettyDecentButton';
import { Editor } from 'slate';
import { PrettyDecentEditor, PrettyDecentMarkTypes } from '../../slate';

const toggleMark = (editor: PrettyDecentEditor, mark: PrettyDecentMarkTypes) => {
    const isActive = isMarkActive(editor, mark);

    return isActive ? Editor.removeMark(editor, mark) : Editor.addMark(editor, mark, true);
};

export { toggleMark };
