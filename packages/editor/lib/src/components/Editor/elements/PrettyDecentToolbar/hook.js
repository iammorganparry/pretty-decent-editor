import { useContext, useEffect } from 'react';
import { PrettyDecentToolbarContext } from './context';
export const usePrettyDecentToolbarContext = () => {
    const { open, setOpen } = useContext(PrettyDecentToolbarContext);
    useEffect(() => {
        if (typeof setOpen === 'undefined') {
            throw new Error('Oops! The use of PrettyDecentToolbarContext requires the PrettyDecentToolbarContextProvider! please wrap the component in this provider');
        }
    }, []);
    return {
        open,
        setOpen,
    };
};
