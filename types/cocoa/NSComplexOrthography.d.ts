/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComplexOrthography<T = any> extends cocoa.NSOrthography {
    languageMap<R = unknown>(): R;
    dominantScript<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSComplexOrthography<T = any> extends cocoa.classes.NSOrthography {
      alloc<R = NSComplexOrthography>(): R;
      new: <R = NSComplexOrthography>() => R;
    }
  }
}

declare const NSComplexOrthography: cocoa.classes.NSComplexOrthography;
