/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSDateTransformerName<T = any> extends NSValueTransformer {}
  namespace classes {
    export interface NSXMLNSDateTransformerName<T = any> extends NSValueTransformer {
      alloc<R = NSXMLNSDateTransformerName>(): R;
      new: <R = NSXMLNSDateTransformerName>() => R;
    }
  }
}

declare const NSXMLNSDateTransformerName: cocoa.classes.NSXMLNSDateTransformerName;
