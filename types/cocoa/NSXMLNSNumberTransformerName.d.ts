/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSNumberTransformerName<T = any> extends NSValueTransformer {
    dealloc<R = void>(): R;
    _oldTransformedValue<R = unknown, P0 = unknown>(__oldTransformedValue: P0): R;
  }
  namespace classes {
    export interface NSXMLNSNumberTransformerName<T = any> extends NSValueTransformer {
      alloc<R = NSXMLNSNumberTransformerName>(): R;
      new: <R = NSXMLNSNumberTransformerName>() => R;
    }
  }
}

declare const NSXMLNSNumberTransformerName: cocoa.classes.NSXMLNSNumberTransformerName;
