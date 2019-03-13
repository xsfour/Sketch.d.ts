/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTabViewItemAuxiliary<T = any> extends NSObject {
    dealloc<R = void>(): R;
    viewController<R = NSViewController>(): R;
    setViewController<R = void, P0 = NSViewController>(_v: P0): R;
    explicitToolTip<R = NSString>(): R;
    setExplicitToolTip<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTabViewItemAuxiliary<T = any> extends NSObject {
      alloc<R = _NSTabViewItemAuxiliary>(): R;
      new: <R = _NSTabViewItemAuxiliary>() => R;
    }
  }
}
