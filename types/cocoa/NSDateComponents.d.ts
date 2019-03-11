/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDateComponents<T = any> {
    // + NSDateComponents(_):
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
  }
  namespace classes {
    export interface NSDateComponents<T = any> {
      // + NSDateComponents(_):
      
    }
  }
}

declare const NSDateComponents: cocoa.classes.NSDateComponents;
