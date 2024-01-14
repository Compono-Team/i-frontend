import { PreApplicationParams } from './type';
import preApplicationApi from './preApplicationApi';

// eslint-disable-next-line import/prefer-default-export
export const postPreApplication = (params:PreApplicationParams) => preApplicationApi.post('', params);
