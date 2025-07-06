import { ReactElement, SVGProps } from 'react';

/**
 * Иконка стрелки
 *
 * @param props {SVGProps<SVGSVGElement>}
 * @returns {ReactElement}
 * @constructor
 */
const ArrowIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={21} height={12} fill='none' {...props}>
      <path fill='#333' d='M20.85 6.875H3.18l3.773 3.773L6 11.6.6 6.2 6 .8l.952.955-3.773 3.77H20.85v1.35Z' />
    </svg>
  );
};

export default ArrowIcon;
