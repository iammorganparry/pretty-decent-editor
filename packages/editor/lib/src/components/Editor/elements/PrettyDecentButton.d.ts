import React from 'react';
import { TippyProps } from '@tippyjs/react';
import { PrettyDecentEditor, PrettyDecentBlockTypes, PrettyDecentMarkTypes } from '../../../../slate';
declare type StyledBtnProps = {
    active: boolean;
    reversed?: boolean;
};
export declare const StyledBtn: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLButtonElement, import("framer-motion").HTMLMotionProps<"button">>, any, StyledBtnProps, never>;
export declare const isMarkActive: (editor: PrettyDecentEditor, format: PrettyDecentMarkTypes) => boolean;
export declare const toggleMark: (editor: PrettyDecentEditor, format: PrettyDecentMarkTypes) => void;
export declare const isBlockActive: (editor: PrettyDecentEditor, format: PrettyDecentBlockTypes) => boolean;
export declare const toggleBlock: (editor: PrettyDecentEditor, format: PrettyDecentBlockTypes) => void;
export declare type PrettyDecentButtonProps = {
    format: PrettyDecentMarkTypes | PrettyDecentBlockTypes;
    type: 'block' | 'mark';
    tooltipProps: TippyProps;
    onClick?: () => void;
    children: React.ReactElement | null;
};
export declare const PrettyDecentButton: React.ForwardRefExoticComponent<PrettyDecentButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
