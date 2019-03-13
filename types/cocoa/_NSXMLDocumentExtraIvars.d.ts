/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXMLDocumentExtraIvars<T = any> extends NSObject {}
  namespace classes {
    export interface _NSXMLDocumentExtraIvars<T = any> extends NSObject {
      alloc<R = _NSXMLDocumentExtraIvars>(): R;
      new: <R = _NSXMLDocumentExtraIvars>() => R;
    }
  }
}
