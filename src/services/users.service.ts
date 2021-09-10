import { axiosInstance } from '@/plugins/axios';
import { User } from '@/types/user.d';

export const getUsers = async (): Promise<User[]> => await axiosInstance.get('/api/users');
