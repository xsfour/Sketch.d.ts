/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexStringTransformer<T = any> extends cocoa.NSValueTransformer {
    cxx_destruct<R = void>(): R;
    delegate<R = cocoa.MSColorHexStringTransformerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSColorHexStringTransformerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSColorHexStringTransformer<T = any> extends cocoa.classes.NSValueTransformer {
      alloc<R = MSColorHexStringTransformer>(): R;
      new: <R = MSColorHexStringTransformer>() => R;
    }
  }
}

declare const MSColorHexStringTransformer: cocoa.classes.MSColorHexStringTransformer;
