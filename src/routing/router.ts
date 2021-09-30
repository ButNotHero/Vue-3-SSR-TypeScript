import {
  createMemoryHistory, createRouter, createWebHistory, Router,
} from 'vue-router';
import { isSSR } from '@/helpers';
import { routes } from './routes';

export function createApplicationRouter(): Router {
  return createRouter({
    history: isSSR() ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
