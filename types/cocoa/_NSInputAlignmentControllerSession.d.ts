/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentControllerSession<T = any> extends cocoa.NSObject {
    alignItemUsingFilter<R = unknown, P0 = unknown>(_alignItemUsingFilter: P0): R;
    setAlignmentGuidesAffectingItem<R = void, P0 = unknown>(_setAlignmentGuidesAffectingItem: P0): R;
    initWithItem_controller<R = unknown, P0 = unknown, P1 = unknown>(_initWithItem: P0, _controller: P1): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSInputAlignmentControllerSession<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSInputAlignmentControllerSession>(): R;
      new: <R = _NSInputAlignmentControllerSession>() => R;
    }
  }
}
