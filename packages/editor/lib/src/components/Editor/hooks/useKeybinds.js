import isHotkey from 'is-hotkey';
import { useState } from 'react';
import { PDEditor } from 'utils/PDEditor';
const initialBinds = (editor) => [
    { keyPair: 'mod+b', keyAction: () => PDEditor.toggleMark(editor, 'bold') },
    { keyPair: 'mod+i', keyAction: () => PDEditor.toggleMark(editor, 'italic') },
    { keyPair: 'mod+u', keyAction: () => PDEditor.toggleMark(editor, 'underline') },
    { keyPair: 'mod+shift+s', keyAction: () => PDEditor.toggleMark(editor, 'strikethrough') },
];
export const useKeybinds = (editor) => {
    const [keybinds, setKeybinds] = useState(initialBinds(editor));
    const handleKeybinds = (event) => {
        keybinds.forEach(({ keyAction, keyPair }) => isHotkey(keyPair, event) && keyAction());
    };
    return { handleKeybinds, keybinds };
};
