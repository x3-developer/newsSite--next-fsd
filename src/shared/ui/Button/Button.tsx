import { ReactElement } from 'react';
import { IButtonProps } from '@shared/ui/Button/button.types';
import { Link } from '@shared/i18n/routing';
import { Condition } from '@shared/ui';
import clsx from 'clsx';
import styles from './styles.module.scss';

/**
 * Кнопка
 *
 * @param {IButtonProps} props
 * @returns {ReactElement}
 * @constructor
 */
const Button = (props: IButtonProps): ReactElement => {
  const { children, className, href, color = 'green', isFilled, ...rest } = props;

  return (
    <Condition
      _if={href !== undefined}
      _then={
        <Link
          href={href as string}
          className={clsx(styles.button, className, styles[color], {
            [styles.fill]: isFilled,
          })}
          {...rest}
        >
          {children}
        </Link>
      }
      _else={
        <button
          className={clsx(styles.button, className, styles[color], {
            [styles.fill]: isFilled,
          })}
          {...rest}
        >
          {children}
        </button>
      }
    />
  );
};

export default Button;
