import { Editor, Transforms } from "slate"
import { PrettyDecentBlockTypes, PrettyDecentChildren, PrettyDecentEditor, PrettyDecentElement } from "../../../slate"

type CreateTableProps = {
    editor: PrettyDecentEditor
    cols: number
    rows: number
}
export const createTable = ({editor, cols, rows}: CreateTableProps) => {

    // create Table Node
    const rowData = Array.from({ length: rows }, (_, i) => ({
        type: 'table-row',
        children: Array.from({length: cols}, (_, i) => ({
            type: 'table-cell',
            children: [{text: ''}]
        }))
    })) as PrettyDecentChildren[]

    console.log({ rowData })

    const newProperties: PrettyDecentElement = {
        type: 'table',
        children: [...rowData]
    }

    Transforms.insertNodes(editor, newProperties)
}