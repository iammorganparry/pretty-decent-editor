import { generateButtonGroups } from 'components/Editor';
import React, { useMemo } from 'react';
import { PrettyDecentToolbarConfigOptions } from 'utils/toolbarConfig';
import { PrettyDecentBlockToolbar } from './PrettyDecentBlockToolbar';
import { PrettyDecentMarkToolbar } from './PrettyDecentMarkToolbar';
import { PrettyDecentTableBtn } from '../PrettyDecentTableBtn';
import { PrettyDecentButton } from '../PrettyDecentButton';
import { PrettyDecentAttachment } from '../PrettyDecentAttachment';
import { PrettyDecentImageBtn } from '../PrettyDecentImages/PrettyDecentImageBtn';
type PrettyDecentToolbarBodyProps = {
    toolbarOptions: PrettyDecentToolbarConfigOptions[];
};
export const PrettyDecentToolbarBody = ({ toolbarOptions }: PrettyDecentToolbarBodyProps): JSX.Element => {
    const markButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'mark'), [toolbarOptions]);
    const blockButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'block'), [toolbarOptions]);
    const generateBtnProps = (option: PrettyDecentToolbarConfigOptions) => ({
        tooltipProps: {
            content: option.tooltipText,
        },
        format: option.format,
        type: option.type,
        'data-testid': option['data-testId'],
    });
    return (
        <>
            <PrettyDecentBlockToolbar>
                <>
                    {blockButtons.map((option) => {
                        if (typeof option !== 'undefined') {
                            const prettyProps = generateBtnProps(option);
                            if (option?.format === 'table') {
                                return (
                                    <PrettyDecentTableBtn key={`toolbar-option-${option?.id}`} {...prettyProps}>
                                        {option.icon}
                                    </PrettyDecentTableBtn>
                                );
                            }
                            if (option?.format === 'attachment') {
                                return (
                                    <PrettyDecentAttachment key={`toolbar-option-${option?.id}`} {...prettyProps}>
                                        {option.icon}
                                    </PrettyDecentAttachment>
                                );
                            }
                            if (option?.format === 'image') {
                                return (
                                    <PrettyDecentImageBtn key={`toolbar-option-${option?.id}`} {...prettyProps}>
                                        {option.icon}
                                    </PrettyDecentImageBtn>
                                );
                            }
                            return (
                                <PrettyDecentButton key={`toolbar-option-${option?.id}`} {...prettyProps}>
                                    {option?.icon ?? null}
                                </PrettyDecentButton>
                            );
                        }
                    })}
                </>
            </PrettyDecentBlockToolbar>
            <PrettyDecentMarkToolbar>
                <>
                    {markButtons.map((option) => {
                        if (typeof option !== 'undefined') {
                            const prettyProps = generateBtnProps(option);
                            return (
                                <PrettyDecentButton key={`toolbar-option-${option?.id}`} {...prettyProps}>
                                    {option?.icon ?? null}
                                </PrettyDecentButton>
                            );
                        }
                    })}
                </>
            </PrettyDecentMarkToolbar>
        </>
    );
};
