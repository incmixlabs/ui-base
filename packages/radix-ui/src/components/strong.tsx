import * as React from 'react';
import classNames from 'classnames';
import { SlotRoot } from './slot';

import { extractProps } from '../helpers/extract-props.js';
import { strongPropDefs } from './strong.props.js';

import type { ComponentPropsWithout, RemovedProps } from '../helpers/component-props.js';
import type { GetPropDefTypes } from '../props/prop-def.js';

type StrongElement = React.ElementRef<'strong'>;
type StrongOwnProps = GetPropDefTypes<typeof strongPropDefs>;
interface StrongProps extends ComponentPropsWithout<'strong', RemovedProps>, StrongOwnProps {}
const Strong = React.forwardRef<StrongElement, StrongProps>((props, forwardedRef) => {
  const { asChild, className, ...strongProps } = extractProps(props, strongPropDefs);
  const Comp = asChild ? SlotRoot : 'strong';
  return (
    <Comp {...strongProps} ref={forwardedRef} className={classNames('rt-Strong', className)} />
  );
});
Strong.displayName = 'Strong';

export { Strong };
export type { StrongProps };
