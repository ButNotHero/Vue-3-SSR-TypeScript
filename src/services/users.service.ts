import { axiosInstance } from '@/plugins/axios';
import { User } from '@/types/user.d';

import { BASE_URL as apiDev } from '../../env.dev';
import { BASE_URL as apiProd } from '../../env.production';

const api = process.env.production === true ? apiProd : apiDev;

export const getUsers = async (): Promise<User[]> => await axiosInstance.get(`${api}/users`);
