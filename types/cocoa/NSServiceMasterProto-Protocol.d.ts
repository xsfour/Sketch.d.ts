/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServiceMasterProtoProtocol<T = any> {
    objectForServicePath<R = unknown, P0 = cocoa.NSString>(_objectForServicePath: P0): R;
  }
  namespace classes {
    export interface NSServiceMasterProtoProtocol<T = any> {  }
  }
}

declare const NSServiceMasterProtoProtocol: cocoa.classes.NSServiceMasterProtoProtocol;
