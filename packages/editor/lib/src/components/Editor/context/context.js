import React from 'react';
import { createContext, useReducer } from 'react';
const initialContext = {
    toolbarProps: {
        options: [
            'bold',
            'italic',
            'underline',
            'code',
            'block-quote',
            'table',
            'numbered-list',
            'bulleted-list',
            'strikethrough',
            'attachment',
        ],
    },
    dispatch: undefined,
};
export const PrettyDecentPropContext = createContext(initialContext);
export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
export const PrettyDecentPropContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialContext);
    return (React.createElement(PrettyDecentPropContext.Provider, { value: { ...state, dispatch } }, children));
};
