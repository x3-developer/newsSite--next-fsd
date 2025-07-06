import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  color?: 'green' | 'golden';
  isFilled?: boolean;
  href?: string;
}
