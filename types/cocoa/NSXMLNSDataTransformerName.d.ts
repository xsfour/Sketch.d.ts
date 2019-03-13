/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXMLNSDataTransformerName<T = any> extends NSValueTransformer {}
  namespace classes {
    export interface NSXMLNSDataTransformerName<T = any> extends NSValueTransformer {
      alloc<R = NSXMLNSDataTransformerName>(): R;
      new: <R = NSXMLNSDataTransformerName>() => R;
    }
  }
}

declare const NSXMLNSDataTransformerName: cocoa.classes.NSXMLNSDataTransformerName;
