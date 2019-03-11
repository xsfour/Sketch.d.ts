/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFCompoundResponseSerializer<T = any> extends cocoa.AFHTTPResponseSerializer {
    responseSerializers<R = cocoa.NSArray>(): R;
    setResponseSerializers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface AFCompoundResponseSerializer<T = any> extends cocoa.classes.AFHTTPResponseSerializer {
      alloc<R = AFCompoundResponseSerializer>(): R;
      new: <R = AFCompoundResponseSerializer>() => R;
      compoundSerializerWithResponseSerializers<R = unknown, P0 = unknown>(_compoundSerializerWithResponseSerializers: P0): R;
    }
  }
}

declare const AFCompoundResponseSerializer: cocoa.classes.AFCompoundResponseSerializer;
