import { jsx } from 'slate-hyperscript';
import { PrettyDecentBlockTypes } from '../../slate';

type PrettyDecentElementTag = {
    type: PrettyDecentBlockTypes;
    url?: string;
};
type PrettyDecentElementTags = {
    [key in ElementTagNames as string]: PrettyDecentElementTag;
};

type PrettyDecentTextTags = {
    [key in TextTagNames as string]: PrettyDecentElementTag;
};

type ElementTagNames = keyof typeof ELEMENT_TAGS;

type TextTagNames = keyof typeof TEXT_TAGS;

const ELEMENT_TAGS = {
    A: (el: Element) => ({ type: 'link', url: el.getAttribute('href') }),
    BLOCKQUOTE: () => ({ type: 'quote' }),
    H1: () => ({ type: 'heading-one' }),
    H2: () => ({ type: 'heading-two' }),
    H3: () => ({ type: 'heading-three' }),
    H4: () => ({ type: 'heading-four' }),
    H5: () => ({ type: 'heading-five' }),
    H6: () => ({ type: 'heading-six' }),
    IMG: (el: Element) => ({ type: 'image', url: el.getAttribute('src') }),
    LI: () => ({ type: 'list-item' }),
    OL: () => ({ type: 'numbered-list' }),
    P: () => ({ type: 'paragraph' }),
    PRE: () => ({ type: 'code' }),
    UL: () => ({ type: 'bulleted-list' }),
} as const;

// COMPAT: `B` is omitted here because Google Docs uses `<b>` in weird ways.
const TEXT_TAGS = {
    CODE: () => ({ code: true }),
    DEL: () => ({ strikethrough: true }),
    EM: () => ({ italic: true }),
    I: () => ({ italic: true }),
    S: () => ({ strikethrough: true }),
    STRONG: () => ({ bold: true }),
    U: () => ({ underline: true }),
} as const;

export const deserialize = (el: ChildNode): any => {
    if (el.nodeType === 3) {
        return el.textContent;
    } else if (el.nodeType !== 1) {
        return null;
    } else if (el.nodeName === 'BR') {
        return '\n';
    }

    const { nodeName } = el;
    let parent = el;

    if (nodeName === 'PRE' && el.childNodes[0] && el.childNodes[0].nodeName === 'CODE') {
        parent = el.childNodes[0];
    }
    const children = Array.from(parent.childNodes).map(deserialize).flat();

    if (el.nodeName === 'BODY') {
        return jsx('fragment', {}, children);
    }

    if (ELEMENT_TAGS[nodeName]) {
        console.log('in here');
        const attrs = ELEMENT_TAGS[nodeName](el);
        return jsx('element', attrs, [{ text: '' }, ...children]);
    }

    if (TEXT_TAGS[nodeName]) {
        const attrs = TEXT_TAGS[nodeName](el);
        return children.map((child) => jsx('text', attrs, child));
    }

    return children;
};
