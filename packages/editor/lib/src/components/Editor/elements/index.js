import React from 'react';
import { PrettyDecentImage } from './PrettyDecentImage';
import { PrettyDecentTable } from './PrettyDecentTable';
import { PrettyDecentTableCell } from './PrettyDecentTableCell';
import { PrettyDecentBlockQuote } from './PrettyDecentBlockQuote';
import { PrettyDecentCode } from './PrettyDecentCode';
import { PrettyDecentAttachmentList } from './PrettyDecentAttachmentList';
export const PrettyDecentElements = ({ attributes, children, element }) => {
    switch (element.type) {
        case 'attachment':
            return React.createElement(PrettyDecentAttachmentList, { ...attributes });
        case 'code':
            return React.createElement(PrettyDecentCode, { ...attributes }, children);
        case 'table':
            return React.createElement(PrettyDecentTable, { ...attributes }, children);
        case 'table-row':
            return React.createElement("tr", { ...attributes }, children);
        case 'table-cell':
            return React.createElement(PrettyDecentTableCell, { ...attributes }, children);
        case 'block-quote':
            return React.createElement(PrettyDecentBlockQuote, { ...attributes }, children);
        case 'bulleted-list':
            return React.createElement("ul", { ...attributes }, children);
        case 'heading-one':
            return React.createElement("h1", { ...attributes }, children);
        case 'heading-two':
            return React.createElement("h2", { ...attributes }, children);
        case 'heading-three':
            return React.createElement("h3", { ...attributes }, children);
        case 'heading-four':
            return React.createElement("h4", { ...attributes }, children);
        case 'heading-five':
            return React.createElement("h5", { ...attributes }, children);
        case 'heading-six':
            return React.createElement("h6", { ...attributes }, children);
        case 'list-item':
            return React.createElement("li", { ...attributes }, children);
        case 'numbered-list':
            return React.createElement("ol", { ...attributes }, children);
        case 'link':
            return (React.createElement("a", { href: element.url, ...attributes }, children));
        case 'image':
            return (React.createElement(PrettyDecentImage, { attributes: attributes, element: element }, children));
        default:
            return React.createElement("p", { ...attributes }, children);
    }
};
