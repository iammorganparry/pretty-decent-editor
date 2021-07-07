import React, { createContext, useState } from 'react';
const initContext = {
    attachments: [],
    setAttachments: undefined,
};
export const PrettyDecentAttachmentContext = createContext(initContext);
export const PrettyDecentAttachmentContextProvider = ({ children, }) => {
    const [attachments, setAttachments] = useState([]);
    return (React.createElement(PrettyDecentAttachmentContext.Provider, { value: { attachments, setAttachments } }, children));
};
