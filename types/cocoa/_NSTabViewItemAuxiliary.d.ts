/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTabViewItemAuxiliary<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    viewController<R = cocoa.NSViewController>(): R;
    setViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    explicitToolTip<R = cocoa.NSString>(): R;
    setExplicitToolTip<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTabViewItemAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTabViewItemAuxiliary>(): R;
      new: <R = _NSTabViewItemAuxiliary>() => R;
    }
  }
}
