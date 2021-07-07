import Resizer from 'react-image-file-resizer';

const MAX_WIDTH = 300;
const MAX_HEIGHT = 300;
const QAULITY = 100;
const ROTATION = 0;

export const resizeFile = (file: File): Promise<string | Blob | File | ProgressEvent<FileReader>> =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            MAX_WIDTH,
            MAX_HEIGHT,
            'JPEG',
            QAULITY,
            ROTATION,
            (uri) => {
                resolve(uri);
            },
            'base64',
        );
    });
