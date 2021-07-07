import { useContext } from 'react';
import { PrettyDecentAttachmentContext, PrettyDecentAttachmentContextType } from './context';

export const usePrettyDecentAttachments = (): PrettyDecentAttachmentContextType =>
    useContext(PrettyDecentAttachmentContext);
