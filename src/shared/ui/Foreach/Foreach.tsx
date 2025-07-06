import { ReactElement } from 'react';
import { IForeachProps } from './foreach.types';

/**
 * Компонент для рендеринга массива элементов
 *
 * @template T
 * @param {IForeachProps<T>} props
 * @returns {ReactElement}
 * @constructor
 */
const Foreach = <T,>(props: IForeachProps<T>): ReactElement => {
  const { children, each } = props;

  return <>{each.map((elem, index) => children(elem, index))}</>;
};

export default Foreach;
