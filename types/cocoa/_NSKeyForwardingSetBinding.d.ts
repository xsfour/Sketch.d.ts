/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyForwardingSetBinding<T = any> extends NSKeySetBinding {
    initWithKey_isStored<R = unknown, P0 = unknown, P1 = boolean>(_initWithKey: P0, _isStored: P1): R;
  }
  namespace classes {
    export interface _NSKeyForwardingSetBinding<T = any> extends NSKeySetBinding {
      alloc<R = _NSKeyForwardingSetBinding>(): R;
      new: <R = _NSKeyForwardingSetBinding>() => R;
    }
  }
}
