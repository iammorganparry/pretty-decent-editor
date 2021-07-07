/// <reference types="react" />
declare type SelectionProps = {
    setClose: (bool: boolean) => void;
};
export declare const Selection: ({ setClose, ...others }: SelectionProps) => JSX.Element;
export declare const PrettyDecentSelection: ({ setClose, ...others }: SelectionProps) => JSX.Element;
export {};
