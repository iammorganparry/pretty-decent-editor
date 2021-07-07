import React from 'react';
import { PrettyDecentProps } from '..';
export declare type PrettyDecentPropContextType = PrettyDecentProps & {
    dispatch: React.Dispatch<PrettyDecentReducerActions> | undefined;
};
declare type PrettyDecentReducerActions = {
    type: 'UPDATE';
    payload: Partial<PrettyDecentPropContextType>;
};
export declare const PrettyDecentPropContext: React.Context<PrettyDecentPropContextType>;
export declare const reducer: (state: PrettyDecentProps, action: PrettyDecentReducerActions) => PrettyDecentProps;
export declare const PrettyDecentPropContextProvider: ({ children }: {
    children: React.ReactElement;
}) => JSX.Element;
export {};
