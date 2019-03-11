/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAETranslatorData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithTranslator_selector<R = unknown, P0 = unknown, P1 = string>(_initWithTranslator: P0, _selector: P1): R;
  }
  namespace classes {
    export interface _NSAETranslatorData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSAETranslatorData>(): R;
      new: <R = _NSAETranslatorData>() => R;
    }
  }
}
