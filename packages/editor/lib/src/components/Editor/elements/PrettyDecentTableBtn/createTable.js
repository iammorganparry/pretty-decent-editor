import { isBlockActive } from 'components/Editor/elements/PrettyDecentButton';
import { Transforms } from 'slate';
export const createTable = ({ editor, cols, rows }) => {
    const isActive = isBlockActive(editor, 'table');
    // create Table Node
    const rowData = Array.from({ length: rows }, () => ({
        type: 'table-row',
        children: Array.from({ length: cols }, () => ({
            type: 'table-cell',
            children: [{ text: '' }],
        })),
    }));
    const newProperties = {
        type: 'table',
        children: [...rowData],
    };
    if (isActive) {
        const paragraph = {
            type: 'paragraph',
            children: [{ text: '' }],
        };
        Transforms.setNodes(editor, paragraph);
    }
    else {
        Transforms.insertNodes(editor, newProperties);
    }
};
