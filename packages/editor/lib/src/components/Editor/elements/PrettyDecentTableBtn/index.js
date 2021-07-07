import React, { useRef } from 'react';
import { PrettyDecentButton } from 'components/Editor/elements/PrettyDecentButton';
import { PortalWithState } from 'react-portal';
import { Selection } from './Selection';
export const PrettyDecentTableBtn = ({ children, ...props }) => {
    const ref = useRef(null);
    return (React.createElement(PortalWithState, { closeOnOutsideClick: true, closeOnEsc: true, node: ref.current }, ({ openPortal, closePortal, isOpen }) => (React.createElement(React.Fragment, null,
        React.createElement(PrettyDecentButton, { ...props, onClick: openPortal, ref: ref }, children),
        isOpen && React.createElement(Selection, { setClose: closePortal })))));
};
