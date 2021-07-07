import React from 'react';
import { useToaster } from 'react-hot-toast';
import { PrettyDecentToast, PrettyDecentToaster, StyledIcon } from './style';
export const PrettyDecentNotifications = (): JSX.Element => {
    const { toasts, handlers } = useToaster();
    const { startPause, endPause } = handlers;
    return (
        <PrettyDecentToaster animate={{ opacity: 1 }} onMouseEnter={startPause} onMouseLeave={endPause}>
            {toasts
                .filter((toast) => toast.visible)
                .map((toast) => (
                    <PrettyDecentToast animate={{ opacity: 1 }} key={toast.id} {...toast.ariaProps}>
                        <StyledIcon>{toast.icon}</StyledIcon>
                        <p>{toast.message}</p>
                    </PrettyDecentToast>
                ))}
        </PrettyDecentToaster>
    );
};
