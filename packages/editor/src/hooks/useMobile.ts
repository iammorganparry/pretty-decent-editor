import { useMedia } from 'react-use';

export const useMobile = (): boolean => {
    return useMedia('(max-width: 768px)');
};
