/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMirrorDataSourceProtocol<T = any> extends SMKWebServerDataSourceProtocol {
    manifestContent<R = NSDictionary>(): R;
    currentArtboardID<R = NSString>(): R;
  }
  namespace classes {
    export interface SMKMirrorDataSourceProtocol<T = any> extends SMKWebServerDataSourceProtocol {  }
  }
}
