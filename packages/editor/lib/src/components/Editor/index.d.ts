import React from 'react';
import { PrettyDecentButtonTypes, PrettyDecentElement, PrettyDecentToolbarOption } from '../../../slate';
import 'tippy.js/dist/tippy.css';
import { PrettyDecentToolbarConfigOptions } from 'utils/toolbarConfig';
export declare type PrettyDecentProps = {
    className?: string;
    /**
     * TODO: Add good docs here
     * toolbarProps are any props used in the maniuplation of the toolbar
     */
    toolbarProps?: {
        options: PrettyDecentToolbarOption[];
    };
    onEditorChange?: (newValue: PrettyDecentElement[]) => void;
    initialState?: PrettyDecentElement[];
    renderAttachments?: React.ReactElement;
    onAttachment?: (state: File[]) => void;
};
export declare const generateButtonGroups: (options: PrettyDecentToolbarConfigOptions[], type: PrettyDecentButtonTypes) => Partial<PrettyDecentToolbarConfigOptions[]>;
export declare const PrettyDecentEditorHeart: (props: PrettyDecentProps) => JSX.Element;
export declare const PrettyDecentEditor: (props: PrettyDecentProps) => JSX.Element;
