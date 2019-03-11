/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKVCPIvarSetBinding<T = any> extends cocoa.NSKeySetBinding {
    initWithSetFunc_ivarOffset<R = unknown, P0 = cocoa.CDUnknownFunctionPointerType, P1 = number>(_initWithSetFunc: P0, _ivarOffset: P1): R;
  }
  namespace classes {
    export interface _NSKVCPIvarSetBinding<T = any> extends cocoa.classes.NSKeySetBinding {
      alloc<R = _NSKVCPIvarSetBinding>(): R;
      new: <R = _NSKVCPIvarSetBinding>() => R;
    }
  }
}
