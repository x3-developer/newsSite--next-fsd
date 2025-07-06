import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import EyeIcon from '@shared/ui/Icon/EyeIcon';

/**
 * Просмотры
 *
 * @param {PropsWithChildren} props
 * @returns {ReactElement}
 * @constructor
 */
const Views = (props: HTMLAttributes<HTMLDivElement>): ReactElement => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(styles.views, className)} {...rest}>
      <EyeIcon />
      {children}
    </div>
  );
};

Views.Value = function ViewsValue(props: PropsWithChildren): ReactElement {
  const { children } = props;

  return <span>{children}</span>;
};

export default Views;
