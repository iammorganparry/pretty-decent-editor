import React from 'react';
export const PrettyDecentLeafs = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = React.createElement("strong", null, children);
    }
    if (leaf.italic) {
        children = React.createElement("em", null, children);
    }
    if (leaf.underline) {
        children = React.createElement("u", null, children);
    }
    if (leaf.strikethrough) {
        children = React.createElement("s", null, children);
    }
    return React.createElement("span", { ...attributes }, children);
};
