import { useMedia } from 'react-use';
export const useMobile = () => {
    return useMedia('(max-width: 768px)');
};
