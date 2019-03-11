/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMirrorDataSourceProtocol<T = any> extends cocoa.SMKWebServerDataSourceProtocol {
    manifestContent<R = cocoa.NSDictionary>(): R;
    currentArtboardID<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface SMKMirrorDataSourceProtocol<T = any> extends cocoa.classes.SMKWebServerDataSourceProtocol {  }
  }
}

declare const SMKMirrorDataSourceProtocol: cocoa.classes.SMKMirrorDataSourceProtocol;
