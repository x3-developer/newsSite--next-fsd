import { ReactNode } from 'react';

export interface IForeachProps<T> {
  children: (elem: T, index: number) => ReactNode;
  each: T[];
}
