/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKWebServerDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    renderExportForRequest_handler<R = void, P0 = cocoa.NSURL, P1 = cocoa.CDUnknownBlockType>(_renderExportForRequest: P0, _handler: P1): R;
  }
  namespace classes {
    export interface SMKWebServerDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const SMKWebServerDataSourceProtocol: cocoa.classes.SMKWebServerDataSourceProtocol;
