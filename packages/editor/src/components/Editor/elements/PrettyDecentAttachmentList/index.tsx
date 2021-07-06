import React from 'react';
import { usePrettyDecentAttachments } from './hook';
import { StyledList, Attachment } from './style';
export const PrettyDecentAttachmentList = (): JSX.Element => {
    const { attachments } = usePrettyDecentAttachments();
    return (
        <StyledList animate={{ opacity: 1, visibility: 'visible' }}>
            {attachments.map((attachment) => (
                <Attachment key={attachment.name}>{attachment.name}</Attachment>
            ))}
        </StyledList>
    );
};
