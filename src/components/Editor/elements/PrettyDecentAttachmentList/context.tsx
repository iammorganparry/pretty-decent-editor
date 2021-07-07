import React, { createContext, useState } from 'react';
import { PrettyDecentFile } from '../../../../../slate';

export type PrettyDecentAttachmentContextType = {
    attachments: PrettyDecentFile[];
    setAttachments: React.Dispatch<React.SetStateAction<PrettyDecentFile[]>> | undefined;
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
    const [attachments, setAttachments] = useState<PrettyDecentFile[]>([]);
    return (
        <PrettyDecentAttachmentContext.Provider value={{ attachments, setAttachments }}>
            {children}
        </PrettyDecentAttachmentContext.Provider>
    );
};
