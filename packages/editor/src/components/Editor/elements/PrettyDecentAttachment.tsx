import React, { useRef } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { usePrettyDecentProps } from '../hooks/hook';
import { PrettyDecentButtonProps, PrettyDecentButton } from './PrettyDecentButton';
import { usePrettyDecentAttachments } from './PrettyDecentAttachmentList/hook';
import { v4 } from 'uuid';
export const PrettyDecentAttachment = ({ children, ...props }: PrettyDecentButtonProps): JSX.Element => {
    const ref = useRef<HTMLInputElement>(null);
    const editor = useSlate();
    const { setAttachments, attachments } = usePrettyDecentAttachments();
    const { onAttachment } = usePrettyDecentProps();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && onAttachment) {
            const hasMultipleFiles = event.target?.files?.length > 1;
            const firstFile = [event?.target?.files[0]];
            const allFiles = [...event.target.files];
            const files = hasMultipleFiles ? allFiles : firstFile;
            const filesWithId = files.map((file) => ({ id: v4(), file }));
            console.log({ filesWithId });
            onAttachment([...attachments, ...filesWithId]);
            setAttachments && setAttachments((ps) => [...ps, ...filesWithId]);
            ReactEditor.focus(editor);
        }
    };

    const handleOpen = () => {
        ref?.current?.click();
    };
    return (
        <>
            <input type="file" hidden onChange={handleChange} ref={ref} />
            <PrettyDecentButton {...props} onClick={handleOpen}>
                {children}
            </PrettyDecentButton>
        </>
    );
};
