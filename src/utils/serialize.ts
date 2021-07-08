import escapeHtml from 'escape-html';
import { Text } from 'slate';
import { PrettyDecentElement } from '../../slate';

const recurser = (node: PrettyDecentElement) => {
    const children = node?.children?.map((n: PrettyDecentElement) => serialize(n)).join('') as
        | string
        | PrettyDecentElement;

    if (Text.isText(node)) {
        let string = escapeHtml(node.text);
        if (node.bold) {
            string = `<strong>${string}</strong>`;
        }
        if (node.italic) {
            string = `<em>${string}<em>`;
        }
        if (node.underline) {
            string = `<u>${string}<u>`;
        }
        if (node.strikethrough) {
            string = `<strike>${string}</strike>`;
        }
        return string;
    }
    //@ts-expect-error TODO: get types to work here
    switch (node.type) {
        case 'block-quote':
            return `<blockquote><p>${children}</p></blockquote>`;
        case 'paragraph':
            return `<p>${children}</p>`;
        case 'link':
            //@ts-expect-error
            return `<a href="${escapeHtml(node.url)}">${children}</a>`;
        case 'table':
            return `<table><tbody>${children}</tbody></table>`;
        case 'table-row':
            return `<tr>${children}</tr>`;
        case 'table-cell':
            return `<td>${children}</td>`;
        case 'image':
            //@ts-expect-error
            return `<img src="${escapeHtml(node.url)}">${children}</img>`;
        case 'bulleted-list':
            return `<ul>${children}</ul>`;
        case 'numbered-list':
            return `<ol>${children}</ol>`;
        case 'list-item':
            return `<li>${children}</li>`;
        case 'code':
            return `<pre><code>${children}</code></pre>`;

        default:
            return children;
    }
};

export const serialize = (elements: PrettyDecentElement | PrettyDecentElement[]): string | PrettyDecentElement => {
    if (Array.isArray(elements)) {
        return elements.reduce((acc, node) => `${acc} ${recurser(node)}`, '');
    }
    return recurser(elements as PrettyDecentElement);
};
