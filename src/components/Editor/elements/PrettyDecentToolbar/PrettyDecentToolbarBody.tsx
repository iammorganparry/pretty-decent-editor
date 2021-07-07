import React, { useMemo } from 'react';
import { PrettyDecentToolbarConfigOptions } from 'utils/toolbarConfig';
import { PrettyDecentBlockToolbar } from './PrettyDecentBlockToolbar';
import { PrettyDecentMarkToolbar } from './PrettyDecentMarkToolbar';
import { PrettyDecentButton } from '../PrettyDecentButton';
import { generateBtnProps, generateButtonGroups, generateButtons } from './utils';
type PrettyDecentToolbarBodyProps = {
    toolbarOptions: PrettyDecentToolbarConfigOptions[];
};

export const PrettyDecentToolbarBody = ({ toolbarOptions }: PrettyDecentToolbarBodyProps): JSX.Element => {
    const markButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'mark'), [toolbarOptions]);
    const blockButtons = useMemo(() => generateButtonGroups(toolbarOptions, 'block'), [toolbarOptions]);
    return (
        <>
            <PrettyDecentBlockToolbar>
                <>
                    {blockButtons.map((option) => {
                        if (typeof option !== 'undefined') {
                            const prettyProps = generateBtnProps(option);
                            return generateButtons(option, prettyProps);
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
