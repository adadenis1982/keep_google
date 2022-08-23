import { store } from '../store';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export interface StoreState {
  notes: Array<{
    id: string;
    title: string;
    body: string;
  }>;
}
