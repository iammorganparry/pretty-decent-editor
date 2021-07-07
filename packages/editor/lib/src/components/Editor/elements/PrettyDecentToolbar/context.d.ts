import React from 'react';
export declare type PrettyDecentToolbarContextType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const PrettyDecentToolbarContext: React.Context<PrettyDecentToolbarContextType>;
declare type PrettyDecentToolbarContextProviderProps = {
    children: React.ReactElement;
};
export declare const PrettyDecentToolbarContextProvider: ({ children, }: PrettyDecentToolbarContextProviderProps) => JSX.Element;
export {};
