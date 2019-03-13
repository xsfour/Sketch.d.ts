/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAKDeserializerStream<T = any> extends NSObject, NSDeserializerStreamProtocol {
    initFromPath<R = unknown, P0 = unknown>(_initFromPath: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSAKDeserializerStream<T = any> extends NSObject, NSDeserializerStreamProtocol {
      alloc<R = NSAKDeserializerStream>(): R;
      new: <R = NSAKDeserializerStream>() => R;
    }
  }
}

declare const NSAKDeserializerStream: cocoa.classes.NSAKDeserializerStream;
