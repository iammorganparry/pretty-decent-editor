import isHotkey from 'is-hotkey';
import React, { useState } from 'react';
import { PDEditor } from 'utils/PDEditor';
import { PrettyDecentEditor } from '../../../../slate';

type PrettyDecentKeybindMap = {
    keyPair: string;
    keyAction: () => void;
};

const initialBinds = (editor: PrettyDecentEditor): PrettyDecentKeybindMap[] => [
    { keyPair: 'mod+b', keyAction: () => PDEditor.toggleMark(editor, 'bold') },
    { keyPair: 'mod+i', keyAction: () => PDEditor.toggleMark(editor, 'italic') },
    { keyPair: 'mod+u', keyAction: () => PDEditor.toggleMark(editor, 'underline') },
    { keyPair: 'mod+shift+s', keyAction: () => PDEditor.toggleMark(editor, 'strikethrough') },
];

export const useKeybinds = (editor: PrettyDecentEditor) => {
    const [keybinds, setKeybinds] = useState<PrettyDecentKeybindMap[]>(initialBinds(editor));
    const handleKeybinds = (event: React.KeyboardEvent<HTMLDivElement> & KeyboardEvent) => {
        keybinds.forEach(({ keyAction, keyPair }) => isHotkey(keyPair, event) && keyAction());
    };
    return { handleKeybinds, keybinds };
};
