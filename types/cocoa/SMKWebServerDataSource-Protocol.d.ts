/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKWebServerDataSourceProtocol<T = any> extends NSObjectProtocol {
    renderExportForRequest_handler<R = void, P0 = NSURL, P1 = CDUnknownBlockType>(_renderExportForRequest: P0, _handler: P1): R;
  }
  namespace classes {
    export interface SMKWebServerDataSourceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
