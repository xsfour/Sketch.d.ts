/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSURLTransformerName<T = any> extends NSValueTransformer {}
  namespace classes {
    export interface NSXMLNSURLTransformerName<T = any> extends NSValueTransformer {
      alloc<R = NSXMLNSURLTransformerName>(): R;
      new: <R = NSXMLNSURLTransformerName>() => R;
    }
  }
}

declare const NSXMLNSURLTransformerName: cocoa.classes.NSXMLNSURLTransformerName;
