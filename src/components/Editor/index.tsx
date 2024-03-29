import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ReactEditor, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { PrettyDecentElements } from './elements';
import { EditorContainer, StyledSlateEditor, StyledSlate } from './styles';
import {
    PrettyDecentEditorChangeDTO,
    PrettyDecentElement,
    PrettyDecentFile,
    PrettyDecentToolbarOption,
} from '../../../slate';
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
import { usePrettyDecentAttachments } from './elements/PrettyDecentAttachmentList/hook';
import { v4 } from 'uuid';
import { checkFileSize } from 'utils/checkFileSize';
import { toBase64 } from 'utils/toBase64';
import { prettyDecentErrorNotification } from 'utils/prettyDecentError';
import { PrettyDecentNotifications } from './elements/PrettyDecentNotifications';
import { serialize } from 'utils/serialize';
export type PrettyDecentProps = {
    className?: string;
    /**
     * TODO: Add good docs here
     * toolbarProps are any props used in the maniuplation of the toolbar
     */
    toolbarProps?: {
        options: PrettyDecentToolbarOption[];
    };
    onEditorChange?: (newValue: PrettyDecentEditorChangeDTO) => void;
    initialState?: PrettyDecentElement[];
    renderAttachments?: React.ReactElement;
    onAttachment?: (files: PrettyDecentFile[]) => void;
    onImage?: (file: PrettyDecentFile) => void;
    onAttachmentRemove?: (file: PrettyDecentFile) => Promise<void>;
};

export const PrettyDecentEditorHeart = (props: PrettyDecentProps): JSX.Element => {
    const editor = useMemo(() => withHistory(withHtml(withTables(withReact(createEditor())))), []);
    const renderElement = useCallback((props) => <PrettyDecentElements {...props} />, []);
    const renderLeaf = useCallback((props) => <PrettyDecentLeafs {...props} />, []);
    const { dispatch, onAttachment, onEditorChange, toolbarProps, className, initialState, renderAttachments } =
        usePrettyDecentProps();
    const toolbarOptions = useMemo(() => generateToolbar(toolbarProps?.options ?? []), [toolbarProps]);
    const { handleKeybinds } = useKeybinds(editor);
    const { setAttachments, attachments } = usePrettyDecentAttachments();
    const [bond] = useDropArea({
        onFiles: (files) => handleDrop(files),
        onUri: (uri) => console.log('uri', uri),
        onText: (text) => console.log('text', text),
    });
    // Add the initial value when setting up our state.
    const [value, setValue] = useState<PrettyDecentElement[]>([
        {
            type: 'paragraph',
            children: [{ text: '', marks: [], bold: false, italic: false, underline: false, code: false }],
        },
    ]);

    const handleDrop = (files: File[]) => {
        if (files) {
            files.forEach(async (file) => {
                if (checkFileSize(file)) {
                    const url = await toBase64(file);
                    const filesWithId = files.map((file) => ({ id: v4(), file, encodedUrl: url }));
                    onAttachment && onAttachment([...attachments, ...filesWithId]);
                    setAttachments && setAttachments((ps) => [...ps, ...filesWithId]);
                    ReactEditor.focus(editor);
                } else {
                    prettyDecentErrorNotification({
                        message: `File: ${file.name} was bigger then 3MB! please choose another file`,
                    });
                }
            });
        }
    };

    const handleChange = (newValue: PrettyDecentElement[]) => {
        if (typeof newValue !== 'undefined' && newValue.length > 0) {
            setValue(newValue);
            const returnValue = {
                children: newValue,
                toString: function () {
                    return JSON.stringify(this.children);
                },
                toEncodedString: function () {
                    return encodeURIComponent(this.toString());
                },
                toHTML: function () {
                    return serialize(this.children) as string;
                },
            };

            console.log(returnValue.toHTML());

            onEditorChange && onEditorChange(returnValue);
        }
    };

    useEffect(() => {
        dispatch && dispatch({ type: 'UPDATE', payload: props });
    }, []);

    useEffect(() => {
        initialState && setValue(initialState);
    }, [initialState]);
    return (
        <EditorContainer {...bond} initial="hidden" animate={{ opacity: 1 }}>
            <StyledSlate editor={editor} value={value} onChange={handleChange}>
                <PrettyDecentToolbar>
                    <PrettyDecentToolbarBody toolbarOptions={toolbarOptions} />
                </PrettyDecentToolbar>
                {renderAttachments ?? <PrettyDecentAttachmentList />}
                <StyledSlateEditor
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    onKeyDown={handleKeybinds}
                    data-testid="pretty-decent-editor"
                    name="pretty-decent-editor"
                    renderLeaf={renderLeaf}
                    className={className}
                    renderElement={renderElement}
                />
            </StyledSlate>
            <PrettyDecentNotifications />
        </EditorContainer>
    );
};

export const PrettyDecentEditor = (props: PrettyDecentProps): JSX.Element => (
    <PrettyDecentPropContextProvider>
        <PrettyDecentAttachmentContextProvider>
            <PrettyDecentEditorHeart {...props} />
        </PrettyDecentAttachmentContextProvider>
    </PrettyDecentPropContextProvider>
);
