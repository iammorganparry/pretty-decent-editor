import React from 'react';
import { PrettyDecentButtonTypes, PrettyDecentToolbarOption } from '../../slate';
export declare type PrettyDecentToolbarConfigOptions = {
    id: string;
    tooltipText: string;
    icon: React.ReactElement;
    format: PrettyDecentToolbarOption;
    type: PrettyDecentButtonTypes;
    'data-testId': string;
};
export declare type PrettyDecentToolbarConfig = {
    [key in PrettyDecentToolbarOption]: PrettyDecentToolbarConfigOptions;
};
export declare const toolbarConfig: PrettyDecentToolbarConfig;
