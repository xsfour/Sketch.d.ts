/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineIntegratedStepper<T = any> extends cocoa.MSIntegratedStepper {
    drawStepper<R = void, P0 = number>(_drawStepper: P0): R;
  }
  namespace classes {
    export interface MSInlineIntegratedStepper<T = any> extends cocoa.classes.MSIntegratedStepper {
      alloc<R = MSInlineIntegratedStepper>(): R;
      new: <R = MSInlineIntegratedStepper>() => R;
    }
  }
}

declare const MSInlineIntegratedStepper: cocoa.classes.MSInlineIntegratedStepper;
