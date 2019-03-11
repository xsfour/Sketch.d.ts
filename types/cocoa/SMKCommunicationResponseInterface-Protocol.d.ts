/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKCommunicationResponseInterfaceProtocol<T = any> extends cocoa.NSObjectProtocol {
    connectionInfo_didReceiveData<R = void, P0 = cocoa.SMKConnectionInfo, P1 = cocoa.NSData>(_connectionInfo: P0, _didReceiveData: P1): R;
    connectionAdvertisementDidChange<R = void, P0 = cocoa.SMKConnectionInfo>(_connectionAdvertisementDidChange: P0): R;
    connectionStatusDidChange<R = void, P0 = cocoa.SMKConnectionInfo>(_connectionStatusDidChange: P0): R;
    connectionInfoDidChange<R = void, P0 = cocoa.NSArray>(_connectionInfoDidChange: P0): R;
  }
  namespace classes {
    export interface SMKCommunicationResponseInterfaceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const SMKCommunicationResponseInterfaceProtocol: cocoa.classes.SMKCommunicationResponseInterfaceProtocol;
