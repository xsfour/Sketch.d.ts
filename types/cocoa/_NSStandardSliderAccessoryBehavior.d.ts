/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStandardSliderAccessoryBehavior<T = any> extends cocoa.NSSliderAccessoryBehavior {
    _hasStepBehaviorInContainer<R = boolean, P0 = unknown>(__hasStepBehaviorInContainer: P0): R;
    hash<R = number>(): R;
    initWithStandardBehavior<R = unknown, P0 = number>(_initWithStandardBehavior: P0): R;
    behavior<R = number>(): R;
  }
  namespace classes {
    export interface _NSStandardSliderAccessoryBehavior<T = any> extends cocoa.classes.NSSliderAccessoryBehavior {
      alloc<R = _NSStandardSliderAccessoryBehavior>(): R;
      new: <R = _NSStandardSliderAccessoryBehavior>() => R;
    }
  }
}
