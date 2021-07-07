import { usePrettyDecentProps } from 'components/Editor/hooks/hook';
import React, { useRef } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { PrettyDecentButtonProps } from '../PrettyDecentButton';
import { insertImage } from './insertImage';
import { PrettyDecentButton } from '../PrettyDecentButton';
import { resizeFile } from 'utils/resizeFile';
export const PrettyDecentImageBtn = ({ children, ...props }: PrettyDecentButtonProps): JSX.Element => {
    const ref = useRef<HTMLInputElement>(null);
    const editor = useSlate();
    // const { setAttachments } = usePrettyDecentAttachments();
    const { onImage } = usePrettyDecentProps();
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            try {
                const file = event.target.files[0];
                const image = await resizeFile(file);
                // onImage && onImage(image as File);
                insertImage(editor, image as string);
            } catch (err) {
                console.log(err);
            }
            // setAttachments && setAttachments((ps) => [...ps, ...files] as File[]);
            ReactEditor.focus(editor);
        }
    };

    const handleOpen = () => {
        ref?.current?.click();
    };
    return (
        <>
            <input type="file" accept="image/*" hidden onChange={handleChange} ref={ref} />
            <PrettyDecentButton {...props} onClick={handleOpen}>
                {children}
            </PrettyDecentButton>
        </>
    );
};
