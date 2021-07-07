const BYTE_MULTIPLE = 1024;
const MAX = 3;
export const checkFileSize = (file: File): boolean => file.size < MAX * (BYTE_MULTIPLE * BYTE_MULTIPLE);
