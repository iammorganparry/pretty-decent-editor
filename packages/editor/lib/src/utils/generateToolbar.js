import { toolbarConfig } from './toolbarConfig';
const findConfig = (option) => {
    return toolbarConfig[option];
};
export const generateToolbar = (options) => options.map((option) => findConfig(option));
