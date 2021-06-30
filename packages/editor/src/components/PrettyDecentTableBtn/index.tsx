import React, { PropsWithChildren, useState } from 'react'
import {
    PrettyDecentButton,
    PrettyDecentButtonProps,
} from 'components/Editor/elements/PrettyDecentButton'
import Tippy from '@tippyjs/react'

export const PrettyDecentTableBtn = ({
    children,
    ...props
}: PropsWithChildren<PrettyDecentButtonProps>) => {
    const [showPopper, setShowPopper] = useState(false)
    const handleClick = () => {
        setShowPopper(true)
    }
    return (
        <Tippy
            placement="bottom"
            interactive
            visible={showPopper}
            interactiveBorder={3}
            arrow
            theme="light"
        >
            <PrettyDecentButton {...props} onClick={handleClick}>
                {children}
            </PrettyDecentButton>
        </Tippy>
    )
}
