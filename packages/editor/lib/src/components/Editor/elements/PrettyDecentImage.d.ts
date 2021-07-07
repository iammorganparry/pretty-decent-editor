import { PropsWithChildren } from 'react';
import { RenderElementProps } from 'slate-react';
export declare const PrettyDecentImage: ({ attributes, children, element, }: PropsWithChildren<RenderElementProps>) => JSX.Element;
declare type StyledImageProps = {
    selected?: boolean;
    focused?: boolean;
};
export declare const StyledImage: import("styled-components").StyledComponent<"img", any, StyledImageProps, never>;
export {};
