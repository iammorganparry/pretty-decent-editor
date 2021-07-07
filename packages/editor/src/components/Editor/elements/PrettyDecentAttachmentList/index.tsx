import React from 'react';
import { usePrettyDecentAttachments } from './hook';
import { StyledList, Attachment } from './style';
export const PrettyDecentAttachmentList = (): JSX.Element => {
    const { attachments } = usePrettyDecentAttachments();
    console.log({ attachments });
    return (
        <StyledList animate={{ opacity: 1, visibility: 'visible' }}>
            {attachments.map((attachment, i) => (
                <Attachment animate={{ opacity: 1 }} key={`${attachment.name}-${i}-x`}>
                    {attachment.name}
                </Attachment>
            ))}
        </StyledList>
    );
};
