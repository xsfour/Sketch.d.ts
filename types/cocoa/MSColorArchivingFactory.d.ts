/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorArchivingFactory<T = any> extends NSObject {}
  namespace classes {
    export interface MSColorArchivingFactory<T = any> extends NSObject {
      alloc<R = MSColorArchivingFactory>(): R;
      new: <R = MSColorArchivingFactory>() => R;
      colorForEncodingColor<R = unknown, P0 = unknown>(_colorForEncodingColor: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSColorArchivingFactory: cocoa.classes.MSColorArchivingFactory;
