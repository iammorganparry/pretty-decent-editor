import { PrettyDecentButton, PrettyDecentButtonProps } from 'components/Editor/elements/PrettyDecentButton'
import React, { PropsWithChildren } from 'react'
import Tippy from "@tippyjs/react";
import { useState } from 'react'
import { PrettyDecentSelection } from './Selection';
import { PrettyDecentEditor } from 'components/Editor';

export const PrettyDecentTableBtn = ({ children, ...props }: PropsWithChildren<PrettyDecentButtonProps>) => {
    const [showPopper, setShowPopper] = useState(false)
    const handleClick = () => {
        setShowPopper(true)
    }
    return (
        <Tippy placement='bottom' interactive visible={showPopper} interactiveBorder={3} arrow theme='light'>
            <PrettyDecentButton {...props} onClick={handleClick}>
                {children}
            </PrettyDecentButton>
        </Tippy>
    )
}