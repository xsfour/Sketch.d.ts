/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFXMLDocumentResponseSerializer<T = any> extends cocoa.AFHTTPResponseSerializer {
    options<R = number>(): R;
    setOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface AFXMLDocumentResponseSerializer<T = any> extends cocoa.classes.AFHTTPResponseSerializer {
      alloc<R = AFXMLDocumentResponseSerializer>(): R;
      new: <R = AFXMLDocumentResponseSerializer>() => R;
      serializerWithXMLDocumentOptions<R = unknown, P0 = number>(_serializerWithXMLDocumentOptions: P0): R;
    }
  }
}

declare const AFXMLDocumentResponseSerializer: cocoa.classes.AFXMLDocumentResponseSerializer;
