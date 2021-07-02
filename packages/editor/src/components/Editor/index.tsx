import React, { useCallback, useMemo, useState } from 'react';
import { withReact } from 'slate-react';
import { createEditor } from 'slate';
import { PrettyDecentElements } from './elements';
import { EditorContainer, StyledSlateEditor, StyledSlate } from './styles';
import { PrettyDecentElement, PrettyDecentToolbarOption } from '../../../slate';
import { PrettyDecentToolbar } from './elements/PrettyDecentToolbar';
import { PrettyDecentButton } from './elements/PrettyDecentButton';
import { PrettyDecentLeafs } from './leafs';
import { withTables } from 'utils/withTables';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { withHtml } from 'utils/withHtml';
import { generateToolbar } from 'utils/generateToolbar';
// type CustomElement = { type: 'paragraph'; children: CustomText[] }

export type PrettyDecentProps = {
    className?: string;
    toolbarProps: {
        options: PrettyDecentToolbarOption[];
    };
};

export const PrettyDecentEditor = ({ className, toolbarProps }: PrettyDecentProps): JSX.Element => {
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
        setValue(newValue);
    };

    return (
        <EditorContainer>
            <StyledSlate
                editor={editor}
                value={value}
                //@ts-expect-error - need this to figure out why my arg types are not propagating
                onChange={handleChange}
            >
                <PrettyDecentToolbar>
                    {toolbarOptions.map((option) => (
                        <PrettyDecentButton
                            key={`toolbar-option-${option.id}`}
                            tooltipProps={{
                                content: option.tooltipText,
                            }}
                            format={option.format}
                            type={option.type}
                            data-testid={option['data-testId']}
                        >
                            {option.icon}
                        </PrettyDecentButton>
                    ))}
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
