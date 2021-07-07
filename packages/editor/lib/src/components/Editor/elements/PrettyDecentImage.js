import React from 'react';
import { useFocused, useSelected } from 'slate-react';
import styled, { css } from 'styled-components';
export const PrettyDecentImage = ({ attributes, children, element, }) => {
    const selected = useSelected();
    const focused = useFocused();
    return (React.createElement("div", { ...attributes },
        children,
        React.createElement(StyledImage, { selected: selected, focused: focused, src: element.url })));
};
export const StyledImage = styled.img `
    ${({ selected, focused }) => css `
        display: block;
        max-width: 100%;
        max-height: 20em;
        box-shadow: ${selected && focused ? '0 0 0 2px blue;' : 'none'};
    `}
`;
