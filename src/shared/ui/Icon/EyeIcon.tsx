import { ReactElement, SVGProps } from 'react';

/**
 * Иконка глаза
 *
 * @param props {SVGProps<SVGSVGElement>}
 * @returns {ReactElement}
 * @constructor
 */
const EyeIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={20} height={16} fill='none' {...props}>
      <path
        fill='#999'
        d='M.985 8C1.768 3.733 5.507.5 10 .5c4.494 0 8.232 3.233 9.016 7.5-.784 4.267-4.522 7.5-9.016 7.5-4.493 0-8.232-3.233-9.015-7.5ZM10 12.167a4.167 4.167 0 1 0 0-8.334 4.167 4.167 0 0 0 0 8.334Zm0-1.667a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z'
      />
    </svg>
  );
};

export default EyeIcon;
