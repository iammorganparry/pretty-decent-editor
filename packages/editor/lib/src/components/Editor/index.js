import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { withReact } from 'slate-react';
import { createEditor } from 'slate';
import { PrettyDecentElements } from './elements';
import { EditorContainer, StyledSlateEditor, StyledSlate } from './styles';
import { PrettyDecentToolbar } from './elements/PrettyDecentToolbar/PrettyDecentToolbar';
import { PrettyDecentLeafs } from './leafs';
import { withTables } from 'plugins/withTables';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { withHtml } from 'plugins/withHtml';
import { generateToolbar } from 'utils/generateToolbar';
import { PrettyDecentToolbarBody } from './elements/PrettyDecentToolbar/PrettyDecentToolbarBody';
import { PrettyDecentPropContextProvider } from './context/context';
import { usePrettyDecentProps } from './hooks/hook';
import { useDropArea } from 'react-use';
import { PrettyDecentAttachmentContextProvider } from './elements/PrettyDecentAttachmentList/context';
import { PrettyDecentAttachmentList } from './elements/PrettyDecentAttachmentList';
import { useKeybinds } from './hooks/useKeybinds';
import { withHistory } from 'slate-history';
export const generateButtonGroups = (options, type) => {
    return options.reduce((acc, curr) => (curr.type === type ? [...acc, curr] : [...acc]), []);
};
export const PrettyDecentEditorHeart = (props) => {
    const editor = useMemo(() => withHistory(withHtml(withTables(withReact(createEditor())))), []);
    const renderElement = useCallback((props) => React.createElement(PrettyDecentElements, { ...props }), []);
    const renderLeaf = useCallback((props) => React.createElement(PrettyDecentLeafs, { ...props }), []);
    const { dispatch, onAttachment, onEditorChange, toolbarProps, className, initialState, renderAttachments } = usePrettyDecentProps();
    const toolbarOptions = useMemo(() => generateToolbar(toolbarProps?.options ?? []), [toolbarProps]);
    const { handleKeybinds } = useKeybinds(editor);
    const [bond] = useDropArea({
        onFiles: (files) => onAttachment && onAttachment(files),
        onUri: (uri) => console.log('uri', uri),
        onText: (text) => console.log('text', text),
    });
    // Add the initial value when setting up our state.
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: '', marks: [], bold: false, italic: false, underline: false, code: false }],
        },
    ]);
    const handleChange = (newValue) => {
        if (typeof newValue !== 'undefined') {
            setValue(newValue);
            onEditorChange && onEditorChange(newValue);
        }
    };
    useEffect(() => {
        dispatch && dispatch({ type: 'UPDATE', payload: props });
    }, []);
    useEffect(() => {
        initialState && setValue(initialState);
    }, [initialState]);
    return (React.createElement(EditorContainer, { ...bond, initial: "hidden", animate: { opacity: 1 } },
        React.createElement(StyledSlate, { editor: editor, value: value, onChange: handleChange },
            React.createElement(PrettyDecentAttachmentContextProvider, null,
                React.createElement(PrettyDecentToolbar, null,
                    React.createElement(PrettyDecentToolbarBody, { toolbarOptions: toolbarOptions })),
                renderAttachments ?? React.createElement(PrettyDecentAttachmentList, null)),
            React.createElement(StyledSlateEditor, { placeholder: "Enter some text...", spellCheck: true, autoFocus: true, onKeyDown: handleKeybinds, "data-testid": "pretty-decent-editor", name: "pretty-decent-editor", renderLeaf: renderLeaf, className: className, renderElement: renderElement }))));
};
export const PrettyDecentEditor = (props) => (React.createElement(PrettyDecentPropContextProvider, null,
    React.createElement(PrettyDecentEditorHeart, { ...props })));
