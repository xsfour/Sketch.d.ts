/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyForwardingGetBinding<T = any> extends cocoa.NSKeyGetBinding {
    initWithKey_isStored<R = unknown, P0 = unknown, P1 = boolean>(_initWithKey: P0, _isStored: P1): R;
  }
  namespace classes {
    export interface _NSKeyForwardingGetBinding<T = any> extends cocoa.classes.NSKeyGetBinding {
      alloc<R = _NSKeyForwardingGetBinding>(): R;
      new: <R = _NSKeyForwardingGetBinding>() => R;
    }
  }
}
