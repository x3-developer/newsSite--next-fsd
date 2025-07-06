import { HTMLAttributes } from 'react';

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'blue' | 'gray';
}
