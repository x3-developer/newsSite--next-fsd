import { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import ClockIcon from '@shared/ui/Icon/ClockIcon';

/**
 * Дата
 *
 * @param {PropsWithChildren} props
 * @returns {ReactElement}
 * @constructor
 */
const Date = (props: HTMLAttributes<HTMLDivElement>): ReactElement => {
  const { children, className, ...rest } = props;

  return (
    <div className={clsx(styles.date, className)} {...rest}>
      <ClockIcon />
      {children}
    </div>
  );
};

Date.Day = function DateDay(props: PropsWithChildren): ReactElement {
  const { children } = props;

  return <span>{children}</span>;
};

Date.Time = function DateTime(props: PropsWithChildren): ReactElement {
  const { children } = props;

  return <span>{children}</span>;
};

export default Date;
