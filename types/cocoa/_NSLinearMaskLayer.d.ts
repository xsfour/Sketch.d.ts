/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLinearMaskLayer<T = any> extends CALinearMaskLayer {
    renderInContext<R = void, P0 = CGContext>(_renderInContext: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    init<R = unknown>(): R;
    shouldArchiveValueForKey<R = boolean, P0 = unknown>(_shouldArchiveValueForKey: P0): R;
  }
  namespace classes {
    export interface _NSLinearMaskLayer<T = any> extends CALinearMaskLayer {  }
  }
}
