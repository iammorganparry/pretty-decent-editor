import React, { createContext, useState } from 'react';

export type PrettyDecentAttachmentContextType = {
    attachments: File[];
    setAttachments: React.Dispatch<React.SetStateAction<File[]>> | undefined;
};

const initContext = {
    attachments: [],
    setAttachments: undefined,
};
export const PrettyDecentAttachmentContext = createContext<PrettyDecentAttachmentContextType>(initContext);

export const PrettyDecentAttachmentContextProvider = ({
    children,
}: {
    children: React.ReactElement | React.ReactElement[];
}): JSX.Element => {
    const [attachments, setAttachments] = useState<File[]>([]);
    return (
        <PrettyDecentAttachmentContext.Provider value={{ attachments, setAttachments }}>
            {children}
        </PrettyDecentAttachmentContext.Provider>
    );
};
