/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol<T = any> {
    requestAppEnabledStateForItems_replyToken<R = void, P0 = cocoa.NSArray, P1 = number>(_requestAppEnabledStateForItems: P0, _replyToken: P1): R;
    _documentWindowFrameForPanelRunningAsASheetInService<R = void, P0 = cocoa.CDUnknownBlockType>(__documentWindowFrameForPanelRunningAsASheetInService: P0): R;
  }
  namespace classes {
    export interface NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol<T = any> {  }
  }
}

declare const NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol: cocoa.classes.NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol;
