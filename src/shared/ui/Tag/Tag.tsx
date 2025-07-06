import { ReactElement } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import { ITagProps } from '@shared/ui/Tag/tag.types';

/**
 * Тег
 *
 * @param {PropsWithChildren} props
 * @returns {ReactElement}
 * @constructor
 */
const Tag = (props: ITagProps): ReactElement => {
  const { children, className, color = 'blue', ...rest } = props;

  return (
    <div className={clsx(styles.tag, styles[color], className)} {...rest}>
      {children}
    </div>
  );
};

export default Tag;
