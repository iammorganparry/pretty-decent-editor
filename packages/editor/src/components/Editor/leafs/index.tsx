import React from 'react';
import { RenderLeafProps } from 'slate-react';

export const PrettyDecentLeafs = ({ attributes, children, leaf }: RenderLeafProps): JSX.Element => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }

    if (leaf.italic) {
        children = <em>{children}</em>;
    }

    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    if (leaf.strikethrough) {
        children = <s>{children}</s>;
    }
    return <span {...attributes}>{children}</span>;
};
