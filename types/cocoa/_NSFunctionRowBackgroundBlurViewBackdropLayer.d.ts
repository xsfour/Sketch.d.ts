/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowBackgroundBlurViewBackdropLayer<T = any> extends cocoa.CABackdropLayer {
    _disable<R = void>(): R;
    _enable<R = void>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    init<R = unknown>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
  }
  namespace classes {
    export interface _NSFunctionRowBackgroundBlurViewBackdropLayer<T = any> extends cocoa.classes.CABackdropLayer {
      defaultValueForKey<R = unknown, P0 = unknown>(_defaultValueForKey: P0): R;
    }
  }
}
