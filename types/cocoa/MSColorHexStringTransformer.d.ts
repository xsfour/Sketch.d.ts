/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexStringTransformer<T = any> extends NSValueTransformer {
    cxx_destruct<R = void>(): R;
    delegate<R = MSColorHexStringTransformerDelegate>(): R;
    setDelegate<R = void, P0 = MSColorHexStringTransformerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSColorHexStringTransformer<T = any> extends NSValueTransformer {
      alloc<R = MSColorHexStringTransformer>(): R;
      new: <R = MSColorHexStringTransformer>() => R;
    }
  }
}

declare const MSColorHexStringTransformer: cocoa.classes.MSColorHexStringTransformer;
