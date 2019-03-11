/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyGetBinding<T = any> extends cocoa.NSKeyBinding {
    getValueFromObject<R = unknown, P0 = unknown>(_getValueFromObject: P0): R;
  }
  namespace classes {
    export interface NSKeyGetBinding<T = any> extends cocoa.classes.NSKeyBinding {
      alloc<R = NSKeyGetBinding>(): R;
      new: <R = NSKeyGetBinding>() => R;
    }
  }
}

declare const NSKeyGetBinding: cocoa.classes.NSKeyGetBinding;
