import React from 'react';
import { PrettyDecentToolbarConfigOptions } from 'utils/toolbarConfig';
import { PrettyDecentButtonTypes } from '../../../../../slate';
import { PrettyDecentTableBtn } from '../PrettyDecentTableBtn';
import { PrettyDecentAttachment } from '../PrettyDecentAttachment';
import { PrettyDecentImageBtn } from '../PrettyDecentImages/PrettyDecentImageBtn';
import { PrettyDecentButton } from '../PrettyDecentButton';

export const generateButtonGroups = (
    options: PrettyDecentToolbarConfigOptions[],
    type: PrettyDecentButtonTypes,
): Partial<PrettyDecentToolbarConfigOptions[]> => {
    return options.reduce(
        (acc, curr) => (curr.type === type ? [...acc, curr] : [...acc]),
        [] as Partial<PrettyDecentToolbarConfigOptions[]>,
    );
};
export const generateBtnProps = (option: PrettyDecentToolbarConfigOptions) => ({
    tooltipProps: {
        content: option.tooltipText,
    },
    format: option.format,
    type: option.type,
    'data-testid': option['data-testId'],
});

export const generateButtons = (
    option: PrettyDecentToolbarConfigOptions,
    props: ReturnType<typeof generateBtnProps>,
): JSX.Element => {
    switch (option.format) {
        case 'table':
            return (
                <PrettyDecentTableBtn key={`toolbar-option-${option?.id}`} {...props}>
                    {option.icon}
                </PrettyDecentTableBtn>
            );

        case 'attachment':
            return (
                <PrettyDecentAttachment key={`toolbar-option-${option?.id}`} {...props}>
                    {option.icon}
                </PrettyDecentAttachment>
            );

        case 'image':
            return (
                <PrettyDecentImageBtn key={`toolbar-option-${option?.id}`} {...props}>
                    {option.icon}
                </PrettyDecentImageBtn>
            );

        default:
            return (
                <PrettyDecentButton key={`toolbar-option-${option?.id}`} {...props}>
                    {option?.icon ?? null}
                </PrettyDecentButton>
            );
    }
};
