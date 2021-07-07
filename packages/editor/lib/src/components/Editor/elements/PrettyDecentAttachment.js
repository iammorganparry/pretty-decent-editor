import React, { useRef } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { usePrettyDecentProps } from '../hooks/hook';
import { PrettyDecentButton } from './PrettyDecentButton';
import { usePrettyDecentAttachments } from './PrettyDecentAttachmentList/hook';
export const PrettyDecentAttachment = ({ children, ...props }) => {
    const ref = useRef(null);
    const editor = useSlate();
    const { setAttachments } = usePrettyDecentAttachments();
    const { onAttachment } = usePrettyDecentProps();
    const handleChange = (event) => {
        if (event.target.files && onAttachment) {
            const hasMultipleFiles = event.target?.files?.length > 1;
            const firstFile = [event?.target?.files[0]];
            const allFiles = [...event.target.files];
            const files = hasMultipleFiles ? allFiles : firstFile;
            onAttachment(hasMultipleFiles ? allFiles : firstFile);
            setAttachments && setAttachments((ps) => [...ps, ...files]);
            ReactEditor.focus(editor);
        }
    };
    const handleOpen = () => {
        ref?.current?.click();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "file", hidden: true, onChange: handleChange, ref: ref }),
        React.createElement(PrettyDecentButton, { ...props, onClick: handleOpen }, children)));
};
