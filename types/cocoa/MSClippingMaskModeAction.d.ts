/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClippingMaskModeAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    shapesWithClippingMask<R = unknown>(): R;
    clippingMaskMode<R = void, P0 = unknown>(_clippingMaskMode: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSClippingMaskModeAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSClippingMaskModeAction>(): R;
      new: <R = MSClippingMaskModeAction>() => R;
    }
  }
}

declare const MSClippingMaskModeAction: cocoa.classes.MSClippingMaskModeAction;
