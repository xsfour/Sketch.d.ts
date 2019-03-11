/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSURLTransformerName<T = any> extends cocoa.NSValueTransformer {}
  namespace classes {
    export interface NSXMLNSURLTransformerName<T = any> extends cocoa.classes.NSValueTransformer {
      alloc<R = NSXMLNSURLTransformerName>(): R;
      new: <R = NSXMLNSURLTransformerName>() => R;
    }
  }
}

declare const NSXMLNSURLTransformerName: cocoa.classes.NSXMLNSURLTransformerName;
