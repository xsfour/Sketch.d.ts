/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKCommunicationInterfaceProtocol<T = any> {
    sendData_to<R = void, P0 = cocoa.NSData, P1 = cocoa.NSUUID>(_sendData: P0, _to: P1): R;
    broadcastData<R = void, P0 = cocoa.NSData>(_broadcastData: P0): R;
    disconnect<R = void, P0 = cocoa.NSUUID>(_disconnect: P0): R;
    connect<R = void, P0 = cocoa.NSUUID>(_connect: P0): R;
    connectionInfoWithReply<R = void, P0 = cocoa.CDUnknownBlockType>(_connectionInfoWithReply: P0): R;
    startUsingOptions_webPort<R = void, P0 = number, P1 = number>(_startUsingOptions: P0, _webPort: P1): R;
  }
  namespace classes {
    export interface SMKCommunicationInterfaceProtocol<T = any> {  }
  }
}

declare const SMKCommunicationInterfaceProtocol: cocoa.classes.SMKCommunicationInterfaceProtocol;
