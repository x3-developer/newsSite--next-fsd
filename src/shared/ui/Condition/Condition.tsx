import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { IConditionProps } from '@shared/ui/Condition/condition.types';

/**
 * Условный рендеринг
 *
 * @param {IConditionProps} props
 * @return {ReactElement}
 * @constructor
 */
const Condition = (props: IConditionProps): ReactElement => {
  const { _if, _then, _else } = props;

  return _if ? <ConditionItem>{_then}</ConditionItem> : <ConditionItem>{_else}</ConditionItem>;
};

const ConditionItem = (props: PropsWithChildren): ReactNode => {
  const { children } = props;

  return typeof children === 'string' ? <>{children}</> : children;
};

export default Condition;
