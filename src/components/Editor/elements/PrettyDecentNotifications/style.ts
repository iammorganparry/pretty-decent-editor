import { motion } from 'framer-motion';
import styled from 'styled-components';
import { sharedAttachment } from '../PrettyDecentAttachmentList/style';

export const PrettyDecentToaster = styled(motion.ul)`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 10px;
    z-index: 3;
    opacity: 0;
    right: 10px;
`;

export const PrettyDecentToast = styled(motion.li)`
    ${sharedAttachment}
    opacity : 1;
    font-size: 14px;
    width: 100%;
    opacity: 0;
    max-width: unset;
`;

export const StyledIcon = styled.span`
    font-size: 18px;
    display: flex;
    min-width: 20px;
`;
