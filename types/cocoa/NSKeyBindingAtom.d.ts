/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyBindingAtom<T = any> extends NSObject {
    description<R = unknown>(): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    binding<R = unknown>(): R;
    setBinding<R = void, P0 = unknown>(_setBinding: P0): R;
    dealloc<R = void>(): R;
    initWithKey_mask_binding<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initWithKey: P0, _mask: P1, _binding: P2): R;
  }
  namespace classes {
    export interface NSKeyBindingAtom<T = any> extends NSObject {
      alloc<R = NSKeyBindingAtom>(): R;
      new: <R = NSKeyBindingAtom>() => R;
    }
  }
}

declare const NSKeyBindingAtom: cocoa.classes.NSKeyBindingAtom;
