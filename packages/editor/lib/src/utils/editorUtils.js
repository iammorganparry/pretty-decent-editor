import { isMarkActive } from 'components/Editor/elements/PrettyDecentButton';
import { Editor } from 'slate';
const toggleMark = (editor, mark) => {
    const isActive = isMarkActive(editor, mark);
    return isActive ? Editor.removeMark(editor, mark) : Editor.addMark(editor, mark, true);
};
export { toggleMark };
