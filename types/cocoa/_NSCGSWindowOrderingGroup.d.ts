/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSWindowOrderingGroup<T = any> extends cocoa.NSObject {
    removeWindow<R = void, P0 = unknown>(_removeWindow: P0): R;
    addWindow_aboveWindow<R = void, P0 = unknown, P1 = unknown>(_addWindow: P0, _aboveWindow: P1): R;
    dealloc<R = void>(): R;
    description<R = unknown>(): R;
    initWithWindows<R = unknown, P0 = unknown>(_initWithWindows: P0): R;
    empty<R = boolean>(): R;
    windows<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface _NSCGSWindowOrderingGroup<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSCGSWindowOrderingGroup>(): R;
      new: <R = _NSCGSWindowOrderingGroup>() => R;
    }
  }
}
