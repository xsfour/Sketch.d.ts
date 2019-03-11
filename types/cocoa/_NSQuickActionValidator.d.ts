/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionValidator<T = any> extends cocoa.NSObject, cocoa._NSQuickActionAutovalidationHandlerProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    cancel<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    initWithObserver<R = unknown, P0 = unknown>(_initWithObserver: P0): R;
    validQuickActions<R = cocoa.NSSet>(): R;
    unvalidatedQuickActions<R = cocoa.NSSet>(): R;
    setUnvalidatedQuickActions<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    itemSource<R = cocoa._NSQuickActionItemSource>(): R;
    setItemSource<R = void, P0 = cocoa._NSQuickActionItemSource>(_v: P0): R;
  }
  namespace classes {
    export interface _NSQuickActionValidator<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSQuickActionAutovalidationHandlerProtocol {
      alloc<R = _NSQuickActionValidator>(): R;
      new: <R = _NSQuickActionValidator>() => R;
      validatorWithObserver<R = unknown, P0 = unknown>(_validatorWithObserver: P0): R;
    }
  }
}
