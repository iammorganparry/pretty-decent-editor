import React from 'react';
export declare type PrettyDecentAttachmentContextType = {
    attachments: File[];
    setAttachments: React.Dispatch<React.SetStateAction<File[]>> | undefined;
};
export declare const PrettyDecentAttachmentContext: React.Context<PrettyDecentAttachmentContextType>;
export declare const PrettyDecentAttachmentContextProvider: ({ children, }: {
    children: React.ReactElement | React.ReactElement[];
}) => JSX.Element;
