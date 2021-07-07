/// <reference types="react" />
export declare const StyledSlateEditor: import("styled-components").StyledComponent<(props: import("slate-react/dist/components/editable").EditableProps) => JSX.Element, any, {}, never>;
export declare const StyledSlate: import("styled-components").StyledComponent<(props: {
    editor: import("slate-react").ReactEditor;
    value: import("../../../slate").PrettyDecentChildren[];
    children: import("react").ReactNode;
    onChange: (value: import("../../../slate").PrettyDecentChildren[]) => void;
}) => JSX.Element, any, {}, never>;
export declare const EditorContainer: import("styled-components").StyledComponent<import("framer-motion").ForwardRefComponent<HTMLDivElement, import("framer-motion").HTMLMotionProps<"div">>, any, {}, never>;
