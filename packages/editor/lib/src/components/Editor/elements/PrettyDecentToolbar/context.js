import { useMobile } from 'hooks/useMobile';
import React, { createContext, useState } from 'react';
const initContext = {
    open: false,
    setOpen: () => undefined,
};
export const PrettyDecentToolbarContext = createContext(initContext);
export const PrettyDecentToolbarContextProvider = ({ children, }) => {
    const isMobile = useMobile();
    const [open, setOpen] = useState(!isMobile);
    return (React.createElement(PrettyDecentToolbarContext.Provider, { value: { open, setOpen } }, children));
};
