/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFocusStackElement<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSFocusStackElement<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFocusStackElement>(): R;
      new: <R = _NSFocusStackElement>() => R;
    }
  }
}
