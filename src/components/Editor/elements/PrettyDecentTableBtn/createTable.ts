import { isBlockActive } from 'components/Editor/elements/PrettyDecentButton';
import { Transforms } from 'slate';
import { PrettyDecentChildren, PrettyDecentEditor, PrettyDecentElement } from '../../../../../slate';

type CreateTableProps = {
    editor: PrettyDecentEditor;
    cols: number;
    rows: number;
};
export const createTable = ({ editor, cols, rows }: CreateTableProps): void => {
    const isActive = isBlockActive(editor, 'table');
    // create Table Node
    const rowData = Array.from({ length: rows }, () => ({
        type: 'table-row',
        children: Array.from({ length: cols }, () => ({
            type: 'table-cell',
            children: [{ text: '' }],
        })),
    })) as PrettyDecentChildren[];

    const newProperties: PrettyDecentElement = {
        type: 'table',
        children: [...rowData],
    };
    if (isActive) {
        const paragraph: PrettyDecentElement = {
            type: 'paragraph',
            children: [{ text: '' }],
        };
        Transforms.setNodes(editor, paragraph);
    } else {
        Transforms.insertNodes(editor, newProperties);
    }
};
