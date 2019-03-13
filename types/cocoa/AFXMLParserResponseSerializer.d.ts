/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFXMLParserResponseSerializer<T = any> extends AFHTTPResponseSerializer {}
  namespace classes {
    export interface AFXMLParserResponseSerializer<T = any> extends AFHTTPResponseSerializer {
      alloc<R = AFXMLParserResponseSerializer>(): R;
      new: <R = AFXMLParserResponseSerializer>() => R;
    }
  }
}

declare const AFXMLParserResponseSerializer: cocoa.classes.AFXMLParserResponseSerializer;
