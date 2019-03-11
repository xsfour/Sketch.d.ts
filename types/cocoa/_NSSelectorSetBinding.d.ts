/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSelectorSetBinding<T = any> extends cocoa.NSKeySetBinding {
    initWithSetFunc_forImp_selector<R = unknown, P0 = cocoa.CDUnknownFunctionPointerType, P1 = cocoa.CDUnknownFunctionPointerType, P2 = string>(_initWithSetFunc: P0, _forImp: P1, _selector: P2): R;
  }
  namespace classes {
    export interface _NSSelectorSetBinding<T = any> extends cocoa.classes.NSKeySetBinding {
      alloc<R = _NSSelectorSetBinding>(): R;
      new: <R = _NSSelectorSetBinding>() => R;
    }
  }
}
