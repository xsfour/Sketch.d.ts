/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSNegateBooleanTransformer<T = any> extends cocoa._NSSharedValueTransformer {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSNegateBooleanTransformer<T = any> extends cocoa.classes._NSSharedValueTransformer {
      alloc<R = _NSNegateBooleanTransformer>(): R;
      new: <R = _NSNegateBooleanTransformer>() => R;
    }
  }
}
