import React, { useCallback, useMemo, useState } from 'react';
import { withReact } from 'slate-react';
import { createEditor } from 'slate';
import { PrettyDecentElements } from './elements';
import { EditorContainer, StyledSlateEditor, StyledSlate } from './styles';
import { PrettyDecentButtonTypes, PrettyDecentElement, PrettyDecentToolbarOption } from '../../../slate';
import { PrettyDecentToolbar } from './elements/PrettyDecentToolbar/PrettyDecentToolbar';
import { PrettyDecentLeafs } from './leafs';
import { withTables } from 'utils/withTables';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { withHtml } from 'utils/withHtml';
import { generateToolbar } from 'utils/generateToolbar';
import { PrettyDecentToolbarConfigOptions } from 'utils/toolbarConfig';
import { PrettyDecentToolbarBody } from './elements/PrettyDecentToolbar/PrettyDecentToolbarBody';
// type CustomElement = { type: 'paragraph'; children: CustomText[] }

export type PrettyDecentProps = {
    className?: string;
    /**
     * TODO: Add good docs here
     * toolbarProps are any props used in the maniuplation of the toolbar
     */
    toolbarProps: {
        options: PrettyDecentToolbarOption[];
    };
    onEditorChange?: (newValue: PrettyDecentElement[]) => void;
    initialState?: PrettyDecentElement[];
};

export const generateButtonGroups = (
    options: PrettyDecentToolbarConfigOptions[],
    type: PrettyDecentButtonTypes,
): Partial<PrettyDecentToolbarConfigOptions[]> => {
    return options.reduce(
        (acc, curr) => (curr.type === type ? [...acc, curr] : [...acc]),
        [] as Partial<PrettyDecentToolbarConfigOptions[]>,
    );
};

export const PrettyDecentEditor = ({ className, toolbarProps, onEditorChange }: PrettyDecentProps): JSX.Element => {
    const editor = useMemo(() => withHtml(withTables(withReact(createEditor()))), []);
    const renderElement = useCallback((props) => <PrettyDecentElements {...props} />, []);
    const renderLeaf = useCallback((props) => <PrettyDecentLeafs {...props} />, []);
    const toolbarOptions = useMemo(() => generateToolbar(toolbarProps.options), [toolbarProps]);

    // Add the initial value when setting up our state.
    const [value, setValue] = useState<PrettyDecentElement[]>([
        {
            type: 'paragraph',
            children: [{ text: '', marks: [], bold: false, italic: false, underline: false, code: false }],
        },
    ]);

    const handleChange = (newValue: PrettyDecentElement[]) => {
        if (typeof newValue !== 'undefined') {
            setValue(newValue);
            onEditorChange && onEditorChange(newValue);
        }
    };

    return (
        <EditorContainer initial="hidden" animate={{ opacity: 1 }}>
            <StyledSlate editor={editor} value={value} onChange={handleChange}>
                <PrettyDecentToolbar>
                    <PrettyDecentToolbarBody toolbarOptions={toolbarOptions} />
                </PrettyDecentToolbar>
                <StyledSlateEditor
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    data-testid="pretty-decent-editor"
                    name="pretty-decent-editor"
                    renderLeaf={renderLeaf}
                    className={className}
                    renderElement={renderElement}
                />
            </StyledSlate>
        </EditorContainer>
    );
};
