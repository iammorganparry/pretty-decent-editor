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
import 'react-tippy/dist/tippy.css'
import { withHtml } from 'utils/withHtml'
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
                        title: 'Bold',
                    }} format="bold" type='mark'>
                        <BiBold />
                    </PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Italic',
                    }} format="italic" type='mark'>
                        <BiItalic />
                    </PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Underline',
                    }} format="underline" type='mark'>
                        <BiUnderline />
                    </PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Code',
                    }} format="code" type='block'>
                        <BiCode />
                    </PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Table',
                    }} format="table" type='block'><BiTable /></PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Heading',
                    }} format="heading-one" type='block'><BiHeading /></PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Block Quote',
                    }} format="block-quote" type='block'><GoQuote /></PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Numbered List',
                    }} format="numbered-list" type='block'><BiListOl /></PrettyDecentButton>
                    <PrettyDecentButton tooltipProps={{
                        title: 'Bulleted List',
                    }} format="bulleted-list" type='block'><BiListUl /></PrettyDecentButton>
                </PrettyDecentToolbar>
                <StyledSlateEditor
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    renderLeaf={renderLeaf}
                    className={className}
                    renderElement={renderElement}
                />
            </StyledSlate>
        </EditorContainer>
    )
}
