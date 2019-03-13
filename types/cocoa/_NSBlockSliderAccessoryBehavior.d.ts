/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockSliderAccessoryBehavior<T = any> extends NSSliderAccessoryBehavior {
    dealloc<R = void>(): R;
    initWithHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithHandler: P0): R;
    handler<R = CDUnknownBlockType>(): R;
  }
  namespace classes {
    export interface _NSBlockSliderAccessoryBehavior<T = any> extends NSSliderAccessoryBehavior {
      alloc<R = _NSBlockSliderAccessoryBehavior>(): R;
      new: <R = _NSBlockSliderAccessoryBehavior>() => R;
    }
  }
}
