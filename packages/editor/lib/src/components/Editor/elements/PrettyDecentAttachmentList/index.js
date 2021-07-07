import React from 'react';
import { usePrettyDecentAttachments } from './hook';
import { StyledList, Attachment } from './style';
export const PrettyDecentAttachmentList = () => {
    const { attachments } = usePrettyDecentAttachments();
    console.log({ attachments });
    return (React.createElement(StyledList, { animate: { opacity: 1, visibility: 'visible' } }, attachments.map((attachment, i) => (React.createElement(Attachment, { animate: { opacity: 1 }, key: `${attachment.name}-${i}-x` }, attachment.name)))));
};
