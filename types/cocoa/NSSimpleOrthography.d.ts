/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimpleOrthography<T = any> extends NSOrthography {
    languageMap<R = unknown>(): R;
    dominantScript<R = unknown>(): R;
    initWithFlags<R = unknown, P0 = number>(_initWithFlags: P0): R;
  }
  namespace classes {
    export interface NSSimpleOrthography<T = any> extends NSOrthography {
      alloc<R = NSSimpleOrthography>(): R;
      new: <R = NSSimpleOrthography>() => R;
      orthographyWithFlags<R = unknown, P0 = number>(_orthographyWithFlags: P0): R;
    }
  }
}

declare const NSSimpleOrthography: cocoa.classes.NSSimpleOrthography;
