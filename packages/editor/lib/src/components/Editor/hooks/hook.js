import { useContext, useEffect } from 'react';
import { PrettyDecentPropContext } from '../context/context';
export const usePrettyDecentProps = () => {
    const { dispatch, ...rest } = useContext(PrettyDecentPropContext);
    useEffect(() => {
        if (typeof dispatch === 'undefined') {
            throw new Error('Oops! You can only use this hook within its required provider. Please ensure the component is wrapped in PrettyDecentPropContextProvider');
        }
    }, [dispatch]);
    return {
        dispatch,
        ...rest,
    };
};
