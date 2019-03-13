/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClippingMaskAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    clippingMask<R = void, P0 = unknown>(_clippingMask: P0): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
  }
  namespace classes {
    export interface MSClippingMaskAction<T = any> extends MSDocumentAction {
      alloc<R = MSClippingMaskAction>(): R;
      new: <R = MSClippingMaskAction>() => R;
    }
  }
}

declare const MSClippingMaskAction: cocoa.classes.MSClippingMaskAction;
