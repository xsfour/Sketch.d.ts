/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFCompoundResponseSerializer<T = any> extends AFHTTPResponseSerializer {
    responseSerializers<R = NSArray>(): R;
    setResponseSerializers<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface AFCompoundResponseSerializer<T = any> extends AFHTTPResponseSerializer {
      alloc<R = AFCompoundResponseSerializer>(): R;
      new: <R = AFCompoundResponseSerializer>() => R;
      compoundSerializerWithResponseSerializers<R = unknown, P0 = unknown>(_compoundSerializerWithResponseSerializers: P0): R;
    }
  }
}

declare const AFCompoundResponseSerializer: cocoa.classes.AFCompoundResponseSerializer;
