/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMagnifierAction<T = any> extends cocoa.MSDocumentAction {
    colorMagnifierAction<R = void, P0 = unknown>(_colorMagnifierAction: P0): R;
    currentPopoverHandlesColorMagnifier<R = boolean>(): R;
    validate<R = boolean>(): R;
    label<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMagnifierAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSMagnifierAction>(): R;
      new: <R = MSMagnifierAction>() => R;
    }
  }
}

declare const MSMagnifierAction: cocoa.classes.MSMagnifierAction;
