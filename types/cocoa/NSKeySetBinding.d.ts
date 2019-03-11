/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeySetBinding<T = any> extends cocoa.NSKeyBinding {
    isScalarProperty<R = boolean>(): R;
    setValue_inObject<R = void, P0 = unknown, P1 = unknown>(_setValue: P0, _inObject: P1): R;
  }
  namespace classes {
    export interface NSKeySetBinding<T = any> extends cocoa.classes.NSKeyBinding {
      alloc<R = NSKeySetBinding>(): R;
      new: <R = NSKeySetBinding>() => R;
    }
  }
}

declare const NSKeySetBinding: cocoa.classes.NSKeySetBinding;
