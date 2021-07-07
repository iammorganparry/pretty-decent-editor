import React, { useRef } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { usePrettyDecentProps } from '../hooks/hook';
import { PrettyDecentButtonProps, PrettyDecentButton } from './PrettyDecentButton';
import { usePrettyDecentAttachments } from './PrettyDecentAttachmentList/hook';
import { v4 } from 'uuid';
import { checkFileSize } from 'utils/checkFileSize';
import { toBase64 } from 'utils/toBase64';
import { prettyDecentErrorNotification } from 'utils/prettyDecentError';

export const PrettyDecentAttachment = ({ children, ...props }: PrettyDecentButtonProps): JSX.Element => {
    const ref = useRef<HTMLInputElement>(null);
    const editor = useSlate();
    const { setAttachments, attachments } = usePrettyDecentAttachments();
    const { onAttachment } = usePrettyDecentProps();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = [...event.target.files];
            files.forEach(async (file) => {
                if (checkFileSize(file)) {
                    const url = await toBase64(file);
                    const filesWithId = files.map((file) => ({ id: v4(), file, encodedUrl: url }));
                    onAttachment && onAttachment([...attachments, ...filesWithId]);
                    setAttachments && setAttachments((ps) => [...ps, ...filesWithId]);
                    ReactEditor.focus(editor);
                } else {
                    prettyDecentErrorNotification({
                        message: `File: ${file.name} was bigger then 3MB! please choose another file`,
                    });
                }
            });
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
