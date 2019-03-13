/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKVCPIvarGetBinding<T = any> extends NSKeyGetBinding {
    initWithFunc_ivarOffset<R = unknown, P0 = CDUnknownFunctionPointerType, P1 = number>(_initWithFunc: P0, _ivarOffset: P1): R;
  }
  namespace classes {
    export interface _NSKVCPIvarGetBinding<T = any> extends NSKeyGetBinding {
      alloc<R = _NSKVCPIvarGetBinding>(): R;
      new: <R = _NSKVCPIvarGetBinding>() => R;
    }
  }
}
