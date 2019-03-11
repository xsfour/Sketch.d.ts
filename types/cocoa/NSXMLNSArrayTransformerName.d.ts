/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSArrayTransformerName<T = any> extends cocoa.NSValueTransformer {}
  namespace classes {
    export interface NSXMLNSArrayTransformerName<T = any> extends cocoa.classes.NSValueTransformer {
      alloc<R = NSXMLNSArrayTransformerName>(): R;
      new: <R = NSXMLNSArrayTransformerName>() => R;
    }
  }
}

declare const NSXMLNSArrayTransformerName: cocoa.classes.NSXMLNSArrayTransformerName;
