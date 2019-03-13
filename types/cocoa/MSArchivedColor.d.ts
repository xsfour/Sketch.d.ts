/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArchivedColor<T = any> extends NSObject, NSCodingProtocol {
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
  }
  namespace classes {
    export interface MSArchivedColor<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = MSArchivedColor>(): R;
      new: <R = MSArchivedColor>() => R;
    }
  }
}

declare const MSArchivedColor: cocoa.classes.MSArchivedColor;
