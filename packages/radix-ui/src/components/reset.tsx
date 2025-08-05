import * as React from 'react';
import classNames from 'classnames';
import { SlotRoot } from './slot';

import { requireReactElement } from '../helpers/require-react-element.js';

import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props.js';

interface ResetProps extends ComponentPropsWithout<typeof SlotRoot, RemovedProps> {}
const Reset = React.forwardRef<HTMLElement, ResetProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <SlotRoot {...props} ref={forwardedRef} className={classNames('rt-reset', className)}>
        {requireReactElement(children)}
      </SlotRoot>
    );
  }
);
Reset.displayName = 'Reset';

export { Reset };
export type { ResetProps };
