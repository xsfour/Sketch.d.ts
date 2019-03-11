/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionConfiguration<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    save<R = void>(): R;
    setActive_forQuickAction<R = void, P0 = boolean, P1 = unknown>(_setActive: P0, _forQuickAction: P1): R;
    setOrderedQuickActions<R = void, P0 = unknown>(_setOrderedQuickActions: P0): R;
    initWithPresentation<R = unknown, P0 = unknown>(_initWithPresentation: P0): R;
  }
  namespace classes {
    export interface _NSQuickActionConfiguration<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSQuickActionConfiguration>(): R;
      new: <R = _NSQuickActionConfiguration>() => R;
    }
  }
}
