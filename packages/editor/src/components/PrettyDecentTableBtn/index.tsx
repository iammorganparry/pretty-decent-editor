import React, { PropsWithChildren, useRef, useState } from 'react';
import { PrettyDecentButton, PrettyDecentButtonProps } from 'components/Editor/elements/PrettyDecentButton';
import { Portal, PortalWithState } from 'react-portal';
import { Selection } from './Selection';

export const PrettyDecentTableBtn = ({ children, ...props }: PropsWithChildren<PrettyDecentButtonProps>) => {
    const ref = useRef<HTMLButtonElement>(null);
    return (
        <PortalWithState closeOnOutsideClick closeOnEsc node={ref.current}>
            {({ openPortal, closePortal, isOpen }) => (
                <>
                    <PrettyDecentButton {...props} onClick={openPortal} ref={ref}>
                        {children}
                    </PrettyDecentButton>
                    {isOpen && <Selection setClose={closePortal} />}
                </>
            )}
        </PortalWithState>
    );
};
