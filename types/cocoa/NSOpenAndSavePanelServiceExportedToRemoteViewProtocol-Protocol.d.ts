/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenAndSavePanelServiceExportedToRemoteViewProtocolProtocol<T = any> {
    setRemoteAccessoryViewDesiredSize<R = void, P0 = cocoa.CGSize>(_setRemoteAccessoryViewDesiredSize: P0): R;
    processAppRespondedEnabledStates_forReplyToken<R = void, P0 = cocoa.NSArray, P1 = number>(_processAppRespondedEnabledStates: P0, _forReplyToken: P1): R;
    validateVisibleColumns<R = void>(): R;
  }
  namespace classes {
    export interface NSOpenAndSavePanelServiceExportedToRemoteViewProtocolProtocol<T = any> {  }
  }
}

declare const NSOpenAndSavePanelServiceExportedToRemoteViewProtocolProtocol: cocoa.classes.NSOpenAndSavePanelServiceExportedToRemoteViewProtocolProtocol;
