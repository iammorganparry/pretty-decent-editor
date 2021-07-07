import React from 'react';
import { usePrettyDecentAttachments } from './hook';
import { StyledList, Attachment, AttachmentAction, AttachmentText } from './style';
import { MdClose } from 'react-icons/md';
import { useCallback } from 'react';
import Tippy from '@tippyjs/react';
import { usePrettyDecentProps } from 'components/Editor/hooks/hook';
import { PrettyDecentFile } from '../../../../../slate';
import { AnimatePresence } from 'framer-motion';
export const PrettyDecentAttachmentList = (): JSX.Element => {
    const { attachments, setAttachments } = usePrettyDecentAttachments();
    const { onAttachmentRemove } = usePrettyDecentProps();
    const handleClick = useCallback(
        (attachment: PrettyDecentFile) => async () => {
            onAttachmentRemove && (await onAttachmentRemove(attachment));
            setAttachments && setAttachments((ps) => ps.filter((a) => a.id !== attachment.id));
        },
        [],
    );
    return (
        <AnimatePresence>
            <StyledList animate={{ opacity: 1, visibility: 'visible' }}>
                {attachments.map((attachment, i) => (
                    <Tippy
                        key={`${attachment.file.name}-${i}-x`}
                        theme="light"
                        placement="top"
                        content={attachment.file.name}
                    >
                        <Attachment animate={{ opacity: 1 }}>
                            <AttachmentText>{attachment.file.name}</AttachmentText>
                            <AttachmentAction onClick={handleClick(attachment)}>
                                <MdClose />
                            </AttachmentAction>
                        </Attachment>
                    </Tippy>
                ))}
            </StyledList>
        </AnimatePresence>
    );
};
