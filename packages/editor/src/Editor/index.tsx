import React, { useCallback, useMemo, useState } from 'react'
import { withReact, Editable, Slate, RenderElementProps, DefaultElement } from 'slate-react'
import { createEditor, Descendant } from 'slate'
import { PrettyDecentElements } from './elements'
import { StyledSlateEditor } from './styles'
import { PrettyDecentElement } from '../../slate'
import { PrettyDecentToolbar } from './elements/PrettyDecentToolbar'
import { PrettyDecentButton } from './elements/PrettyDecentButton'
import { BiCode, BiBold, BiUnderline, BiItalic, BiHeading, BiListOl, BiListUl, BiTable } from 'react-icons/bi'
import { GoQuote } from 'react-icons/go'
import { PrettyDecentLeafs } from './leafs'
// type CustomElement = { type: 'paragraph'; children: CustomText[] }

export type PrettyDecentProps = {
    className?: string
}

export const PrettyDecentEditor = ({ className }: PrettyDecentProps) => {
    const editor = useMemo(() => withReact(createEditor()), [])
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
        <div className="App">
            <Slate
                editor={editor}
                value={value}
                //@ts-expect-error
                onChange={handleChange}
            >
                <PrettyDecentToolbar>
                    <PrettyDecentButton format="bold" type='mark'>
                        <BiBold />
                    </PrettyDecentButton>
                    <PrettyDecentButton format="italic" type='mark'>
                        <BiItalic />
                    </PrettyDecentButton>
                    <PrettyDecentButton format="underline" type='mark'>
                        <BiUnderline />
                    </PrettyDecentButton>
                    <PrettyDecentButton format="code" type='block'>
                        <BiCode />
                    </PrettyDecentButton>
                    <PrettyDecentButton format="table" type='block'><BiTable /></PrettyDecentButton>
                    <PrettyDecentButton format="heading-one" type='block'><BiHeading /></PrettyDecentButton>
                    <PrettyDecentButton format="block-quote" type='block'><GoQuote /></PrettyDecentButton>
                    <PrettyDecentButton format="numbered-list" type='block'><BiListOl /></PrettyDecentButton>
                    <PrettyDecentButton format="bulleted-list" type='block'><BiListUl /></PrettyDecentButton>
                </PrettyDecentToolbar>
                <StyledSlateEditor
                    placeholder="Enter some text..."
                    spellCheck
                    autoFocus
                    renderLeaf={renderLeaf}
                    className={className}
                    renderElement={renderElement}
                />
            </Slate>
        </div>
    )
}

