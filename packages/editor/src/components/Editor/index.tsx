import React, { useCallback, useMemo, useState } from 'react'
import { withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { PrettyDecentElements } from './elements'
import { EditorContainer, StyledSlateEditor, StyledSlate } from './styles'
import { PrettyDecentElement } from '../../../slate'
import { PrettyDecentToolbar } from './elements/PrettyDecentToolbar'
import { PrettyDecentButton } from './elements/PrettyDecentButton'
import { BiCode, BiBold, BiUnderline, BiItalic, BiHeading, BiListOl, BiListUl, BiTable } from 'react-icons/bi'
import { GoQuote } from 'react-icons/go'
import { PrettyDecentLeafs } from './leafs'
import { withTables } from 'utils/withTables'
import 'tippy.js/dist/tippy.css'; // optional for styling
import { withHtml } from 'utils/withHtml'
import { PrettyDecentTableBtn } from 'components/PrettyDecentTableBtn'
// type CustomElement = { type: 'paragraph'; children: CustomText[] }

export type PrettyDecentProps = {
    className?: string
}

export const PrettyDecentEditor = ({ className }: PrettyDecentProps) => {
    const editor = useMemo(() => withHtml(withTables(withReact(createEditor()))), [])
    const renderElement = useCallback(props => <PrettyDecentElements {...props} />, [])
    const renderLeaf = useCallback(props => <PrettyDecentLeafs {...props} />, [])
    // Add the initial value when setting up our state.
    const [value, setValue] = useState<PrettyDecentElement[]>([
        {
            type: 'paragraph',
            children: [{ text: '', marks: [], bold: false, italic: false, underline: false, code: false }],
        },
    ])

    const handleChange = (newValue: PrettyDecentElement[]) => {
        setValue(newValue)
    }

    return (
        <EditorContainer>
            <StyledSlate
                editor={editor}
                value={value}
                //@ts-expect-error
                onChange={handleChange}
            >
                <PrettyDecentToolbar>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Bold',
                    }} format="bold" type='mark' data-testid='bold-btn'>
                        <BiBold />
                    </PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Italic',
                    }} format="italic" type='mark' data-testid='italic-btn'>
                        <BiItalic />
                    </PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Underline',
                    }} format="underline" type='mark' data-testid='underline-btn'>
                        <BiUnderline />
                    </PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Code',
                    }} format="code" type='block' data-testid='code-btn'>
                        <BiCode />
                    </PrettyDecentButton>
                    <PrettyDecentTableBtn tooltipProps={{
                        content: 'Table',
                    }} format="table" type='block' data-testid='table-btn'><BiTable /></PrettyDecentTableBtn>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Heading',
                    }} format="heading-one" type='block' data-testid='heading-btn'><BiHeading /></PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Block Quote',
                    }} format="block-quote" type='block' data-testid='quote-btn'><GoQuote /></PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Numbered List',
                    }} format="numbered-list" type='block' data-testid='ol-btn'><BiListOl /></PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        content: 'Bulleted List',
                    }} format="bulleted-list" type='block' data-testid='ul-btn'><BiListUl /></PrettyDecentButton>
                </PrettyDecentToolbar>
                <StyledSlateEditor
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    data-testid='pretty-decent-editor'
                    name='pretty-decent-editor'
                    renderLeaf={renderLeaf}
                    className={className}
                    renderElement={renderElement}
                />
            </StyledSlate>
        </EditorContainer>
    )
}

