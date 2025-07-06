import { ReactElement, SVGProps } from 'react';

/**
 * Иконка бургера
 *
 * @param props {SVGProps<SVGSVGElement>}
 * @returns {ReactElement}
 * @constructor
 */
const BurgerIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={18} height={14} fill='none' {...props}>
      <path fill='#333' fillRule='evenodd' d='M0 14h18v-2H0v2Zm0-6h18V6H0v2Zm0-8v2h18V0H0Z' clipRule='evenodd' />
    </svg>
  );
};

export default BurgerIcon;
