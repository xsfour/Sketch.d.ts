/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCReceiptValidationContext<T = any> extends cocoa.NSObject {
    valid<R = boolean>(): R;
    setValid<R = void, P0 = boolean>(_v: P0): R;
    quickValidated<R = boolean>(): R;
    setQuickValidated<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface BCReceiptValidationContext<T = any> extends cocoa.classes.NSObject {
      alloc<R = BCReceiptValidationContext>(): R;
      new: <R = BCReceiptValidationContext>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const BCReceiptValidationContext: cocoa.classes.BCReceiptValidationContext;
