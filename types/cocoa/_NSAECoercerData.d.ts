/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAECoercerData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithCoercer_selector<R = unknown, P0 = unknown, P1 = string>(_initWithCoercer: P0, _selector: P1): R;
  }
  namespace classes {
    export interface _NSAECoercerData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSAECoercerData>(): R;
      new: <R = _NSAECoercerData>() => R;
    }
  }
}
