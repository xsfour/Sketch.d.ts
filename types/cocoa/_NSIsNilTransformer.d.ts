/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIsNilTransformer<T = any> extends cocoa._NSNegateBooleanTransformer {}
  namespace classes {
    export interface _NSIsNilTransformer<T = any> extends cocoa.classes._NSNegateBooleanTransformer {
      alloc<R = _NSIsNilTransformer>(): R;
      new: <R = _NSIsNilTransformer>() => R;
      supportsReverseTransformation<R = boolean>(): R;
    }
  }
}
