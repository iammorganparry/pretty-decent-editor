import React from 'react';
import { PrettyDecentEditor } from '../../../../slate';
declare type PrettyDecentKeybindMap = {
    keyPair: string;
    keyAction: () => void;
};
export declare const useKeybinds: (editor: PrettyDecentEditor) => {
    handleKeybinds: (event: React.KeyboardEvent<HTMLDivElement> & KeyboardEvent) => void;
    keybinds: PrettyDecentKeybindMap[];
};
export {};
