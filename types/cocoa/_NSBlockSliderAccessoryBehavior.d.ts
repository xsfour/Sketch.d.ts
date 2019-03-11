/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockSliderAccessoryBehavior<T = any> extends cocoa.NSSliderAccessoryBehavior {
    dealloc<R = void>(): R;
    initWithHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithHandler: P0): R;
    handler<R = cocoa.CDUnknownBlockType>(): R;
  }
  namespace classes {
    export interface _NSBlockSliderAccessoryBehavior<T = any> extends cocoa.classes.NSSliderAccessoryBehavior {
      alloc<R = _NSBlockSliderAccessoryBehavior>(): R;
      new: <R = _NSBlockSliderAccessoryBehavior>() => R;
    }
  }
}
