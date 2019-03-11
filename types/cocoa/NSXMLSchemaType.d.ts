/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLSchemaType<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSXMLSchemaType<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSXMLSchemaType>(): R;
      new: <R = NSXMLSchemaType>() => R;
      stringValueForObject<R = unknown, P0 = unknown>(_stringValueForObject: P0): R;
    }
  }
}

declare const NSXMLSchemaType: cocoa.classes.NSXMLSchemaType;
