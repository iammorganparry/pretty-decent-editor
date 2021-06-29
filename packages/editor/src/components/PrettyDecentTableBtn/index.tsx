import { PrettyDecentButton, PrettyDecentButtonProps } from 'components/Editor/elements/PrettyDecentButton'
import React, { PropsWithChildren } from 'react'
import { useState } from 'react'
export const PrettyDecentTableBtn = ({ children, ...props }: PropsWithChildren<PrettyDecentButtonProps>) => {
    const [showPopper, setShowPopper] = useState(false)
    const handleClick = () => {
        setShowPopper(true)
    }
    return <PrettyDecentButton {...props} onClick={handleClick}>{children}</PrettyDecentButton>
}