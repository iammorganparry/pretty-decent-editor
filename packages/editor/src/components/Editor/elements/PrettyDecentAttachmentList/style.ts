import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledList = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;
    padding: 0;
    opacity: 0;
    visibility: collapse;
    background: #fff;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    padding: 4px;
    margin: 0 4px;
    /* height: 100%; */
    /* position: absolute; */
    /* margin: 2px; */
`;

export const Attachment = styled(motion.li)`
    display: flex;
    height: 26px;
    align-items: center;
    min-width: 200px;
    max-width: 200px;
    font-size: 12px;
    margin: 1px 4px 1px 0;
    padding: 4px 4px 4px 8px;
    opacity: 0;
    justify-content: space-between;
    border-radius: 5px;
    background: #eee;

    @media (max-width: 768px) {
        width: 100%;
        max-width: unset;
    }
`;

export const AttachmentAction = styled.button`
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        color: orange;
        cursor: pointer;
    }
`;

export const AttachmentText = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
