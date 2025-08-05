export * as Context from '@radix-ui/react-context';
import { Primitive as BasePrimitive, dispatchDiscreteCustomEvent } from '@radix-ui/react-primitive';
export { composeRefs, useComposedRefs } from '@radix-ui/react-compose-refs';
export * as RovingFocus from '@radix-ui/react-roving-focus';
export {
  useControllableState,
  useControllableStateReducer,
} from '@radix-ui/react-use-controllable-state';
const Primitive = BasePrimitive as typeof BasePrimitive & {
  Root: typeof BasePrimitive;
  dispatchDiscreteCustomEvent: typeof dispatchDiscreteCustomEvent;
};
Primitive.dispatchDiscreteCustomEvent = dispatchDiscreteCustomEvent;
Primitive.Root = BasePrimitive;
export { Primitive };
declare function composeEventHandlers<E extends {
    defaultPrevented: boolean;
}>(originalEventHandler?: (event: E) => void, ourEventHandler?: (event: E) => void, { checkForDefaultPrevented }?: {
    checkForDefaultPrevented?: boolean | undefined;
}): (event: E) => void;

export { composeEventHandlers };

/*
 Context,
  Primitive,
  useComposedRefs,
  RovingFocus,
  useControllableState */