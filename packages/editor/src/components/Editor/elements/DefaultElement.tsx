import React from 'react';
import { RenderElementProps } from 'slate-react';

export const DefaultElement = (props: RenderElementProps) => {
    return <p {...props.attributes}>{props.children}</p>;
};
