import { useMobile } from 'hooks/useMobile';
import React, { createContext, useState } from 'react';

export type PrettyDecentToolbarContextType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initContext = {
    open: false,
    setOpen: () => undefined,
};

export const PrettyDecentToolbarContext = createContext<PrettyDecentToolbarContextType>(initContext);

type PrettyDecentToolbarContextProviderProps = {
    children: React.ReactElement;
};
export const PrettyDecentToolbarContextProvider = ({
    children,
}: PrettyDecentToolbarContextProviderProps): JSX.Element => {
    const isMobile = useMobile();
    const [open, setOpen] = useState(!isMobile);

    return (
        <PrettyDecentToolbarContext.Provider value={{ open, setOpen }}>{children}</PrettyDecentToolbarContext.Provider>
    );
};
