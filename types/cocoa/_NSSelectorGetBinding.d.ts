/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSelectorGetBinding<T = any> extends cocoa.NSKeyGetBinding {
    initWithFunc_forImp_selector<R = unknown, P0 = cocoa.CDUnknownFunctionPointerType, P1 = cocoa.CDUnknownFunctionPointerType, P2 = string>(_initWithFunc: P0, _forImp: P1, _selector: P2): R;
  }
  namespace classes {
    export interface _NSSelectorGetBinding<T = any> extends cocoa.classes.NSKeyGetBinding {
      alloc<R = _NSSelectorGetBinding>(): R;
      new: <R = _NSSelectorGetBinding>() => R;
    }
  }
}
