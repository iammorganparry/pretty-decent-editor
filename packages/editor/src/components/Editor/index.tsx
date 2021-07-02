import React, { useCallback, useMemo, useState } from 'react';
import { withReact } from 'slate-react';
import { createEditor } from 'slate';
import { PrettyDecentElements } from './elements';
import { EditorContainer, StyledSlateEditor, StyledSlate } from './styles';
import { PrettyDecentButtonTypes, PrettyDecentElement, PrettyDecentToolbarOption } from '../../../slate';
import { PrettyDecentToolbar } from './elements/PrettyDecentToolbar/PrettyDecentToolbar';
import { PrettyDecentButton } from './elements/PrettyDecentButton';
import { PrettyDecentLeafs } from './leafs';
import { withTables } from 'utils/withTables';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { withHtml } from 'utils/withHtml';
import { generateToolbar } from 'utils/generateToolbar';
import { PrettyDecentTableBtn } from './elements/PrettyDecentTableBtn';
import { PrettyDecentToolbarConfigOptions } from 'utils/toolbarConfig';
import { PrettyDecentBlockToolbar } from './elements/PrettyDecentToolbar/PrettyDecentBlockToolbar';
import { PrettyDecentMarkToolbar } from './elements/PrettyDecentToolbar/PrettyDecentMarkToolbar';
// type CustomElement = { type: 'paragraph'; children: CustomText[] }

export type PrettyDecentProps = {
    className?: string;
    toolbarProps: {
        options: PrettyDecentToolbarOption[];
    };
};

export const generateButtonGroups = (options: PrettyDecentToolbarConfigOptions[], type: PrettyDecentButtonTypes) => {
    return options.reduce(
        (acc, curr) => (curr.type === type ? [...acc, curr] : [...acc]),
        [] as Partial<PrettyDecentToolbarConfigOptions[]>,
    );
};

export const PrettyDecentEditor = ({ className, toolbarProps }: PrettyDecentProps): JSX.Element => {
    const editor = useMemo(() => withHtml(withTables(withReact(createEditor()))), []);
    const renderElement = useCallback((props) => <PrettyDecentElements {...props} />, []);
    const renderLeaf = useCallback((props) => <PrettyDecentLeafs {...props} />, []);
    const toolbarOptions = useMemo(() => generateToolbar(toolbarProps.options), [toolbarProps]);
    const markButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'mark'), [toolbarOptions]);
    const blockButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'block'), [toolbarOptions]);
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
    const generateBtnProps = (option: PrettyDecentToolbarConfigOptions) => ({
        tooltipProps: {
            content: option.tooltipText,
        },
        format: option.format,
        type: option.type,
        'data-testid': option['data-testId'],
    });
    return (
        <EditorContainer initial="hidden" animate={{ opacity: 1 }}>
            <StyledSlate
                editor={editor}
                value={value}
                //@ts-expect-error - need this to figure out why my arg types are not propagating
                onChange={handleChange}
            >
                <PrettyDecentToolbar>
                    <PrettyDecentBlockToolbar>
                        <>
                            {blockButtons.map((option) => {
                                if (typeof option !== 'undefined') {
                                    const prettyProps = generateBtnProps(option);
                                    if (option?.format === 'table') {
                                        return (
                                            <PrettyDecentTableBtn {...prettyProps}>{option.icon}</PrettyDecentTableBtn>
                                        );
                                    }
                                    return (
                                        <PrettyDecentButton key={`toolbar-option-${option?.id}`} {...prettyProps}>
                                            {option?.icon ?? null}
                                        </PrettyDecentButton>
                                    );
                                }
                            })}
                        </>
                    </PrettyDecentBlockToolbar>
                    <PrettyDecentMarkToolbar>
                        <>
                            {markButtons.map((option) => {
                                if (typeof option !== 'undefined') {
                                    const prettyProps = generateBtnProps(option);
                                    return (
                                        <PrettyDecentButton key={`toolbar-option-${option?.id}`} {...prettyProps}>
                                            {option?.icon ?? null}
                                        </PrettyDecentButton>
                                    );
                                }
                            })}
                        </>
                    </PrettyDecentMarkToolbar>
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
