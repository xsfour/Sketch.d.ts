/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSDateTransformerName<T = any> extends cocoa.NSValueTransformer {}
  namespace classes {
    export interface NSXMLNSDateTransformerName<T = any> extends cocoa.classes.NSValueTransformer {
      alloc<R = NSXMLNSDateTransformerName>(): R;
      new: <R = NSXMLNSDateTransformerName>() => R;
    }
  }
}

declare const NSXMLNSDateTransformerName: cocoa.classes.NSXMLNSDateTransformerName;
