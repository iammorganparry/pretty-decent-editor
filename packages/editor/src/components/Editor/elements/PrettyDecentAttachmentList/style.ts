import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledList = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    opacity: 0;
    visibility: collapse;
    background: #fff;
    border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    padding: 4px;
    margin: 0 4px;
    /* height: 100%; */
    /* position: absolute; */
    /* margin: 2px; */
`;

export const Attachment = styled(motion.li)`
    display: flex;
    height: 26px;
    width: 100%;
    align-items: center;
    font-size: 12px;
    margin: 8.5px 0;
    padding: 8px 16px;
    border-radius: 5px;
    background: #eee;
`;
