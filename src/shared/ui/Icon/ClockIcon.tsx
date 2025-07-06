import { ReactElement, SVGProps } from 'react';

/**
 * Иконка часов
 *
 * @param props {SVGProps<SVGSVGElement>}
 * @returns {ReactElement}
 * @constructor
 */
const ClockIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none' {...props}>
      <path
        fill='#999'
        fillRule='evenodd'
        d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm1-8.414V3H7v5.414l3 3L11.414 10 9 7.586Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export default ClockIcon;
