/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSelectorGetBinding<T = any> extends NSKeyGetBinding {
    initWithFunc_forImp_selector<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = CDUnknownFunctionPointerType, P2 = string>(_initWithFunc: P0, _forImp: P1, _selector: P2): R;
  }
  namespace classes {
    export interface _NSSelectorGetBinding<T = any> extends NSKeyGetBinding {
      alloc<R = _NSSelectorGetBinding>(): R;
      new: <R = _NSSelectorGetBinding>() => R;
    }
  }
}
