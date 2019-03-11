/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIgnoreClippingMaskAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    ignoreClippingMask<R = void, P0 = unknown>(_ignoreClippingMask: P0): R;
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSIgnoreClippingMaskAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSIgnoreClippingMaskAction>(): R;
      new: <R = MSIgnoreClippingMaskAction>() => R;
    }
  }
}

declare const MSIgnoreClippingMaskAction: cocoa.classes.MSIgnoreClippingMaskAction;
