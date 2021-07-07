import { generateButtonGroups } from 'components/Editor';
import React, { useMemo } from 'react';
import { PrettyDecentBlockToolbar } from './PrettyDecentBlockToolbar';
import { PrettyDecentMarkToolbar } from './PrettyDecentMarkToolbar';
import { PrettyDecentTableBtn } from '../PrettyDecentTableBtn';
import { PrettyDecentButton } from '../PrettyDecentButton';
import { PrettyDecentAttachment } from '../PrettyDecentAttachment';
export const PrettyDecentToolbarBody = ({ toolbarOptions }) => {
    const markButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'mark'), [toolbarOptions]);
    const blockButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'block'), [toolbarOptions]);
    const generateBtnProps = (option) => ({
        tooltipProps: {
            content: option.tooltipText,
        },
        format: option.format,
        type: option.type,
        'data-testid': option['data-testId'],
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(PrettyDecentBlockToolbar, null,
            React.createElement(React.Fragment, null, blockButtons.map((option) => {
                if (typeof option !== 'undefined') {
                    const prettyProps = generateBtnProps(option);
                    if (option?.format === 'table') {
                        return (React.createElement(PrettyDecentTableBtn, { key: `toolbar-option-${option?.id}`, ...prettyProps }, option.icon));
                    }
                    if (option?.format === 'attachment') {
                        return (React.createElement(PrettyDecentAttachment, { key: `toolbar-option-${option?.id}`, ...prettyProps }, option.icon));
                    }
                    return (React.createElement(PrettyDecentButton, { key: `toolbar-option-${option?.id}`, ...prettyProps }, option?.icon ?? null));
                }
            }))),
        React.createElement(PrettyDecentMarkToolbar, null,
            React.createElement(React.Fragment, null, markButtons.map((option) => {
                if (typeof option !== 'undefined') {
                    const prettyProps = generateBtnProps(option);
                    return (React.createElement(PrettyDecentButton, { key: `toolbar-option-${option?.id}`, ...prettyProps }, option?.icon ?? null));
                }
            })))));
};
