/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface RTIInputSystemDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    inputSystemService_didCreateInputSession<R = void, P0 = cocoa.RTIInputSystemService, P1 = cocoa.RTIInputSystemServiceSession>(_inputSystemService: P0, _didCreateInputSession: P1): R;
    inputSystemService_inputSessionDidUnpause_withReason<R = void, P0 = cocoa.RTIInputSystemService, P1 = cocoa.RTIInputSystemServiceSession, P2 = cocoa.NSString>(_inputSystemService: P0, _inputSessionDidUnpause: P1, _withReason: P2): R;
    inputSystemService_inputSessionDidPause_withReason<R = void, P0 = cocoa.RTIInputSystemService, P1 = cocoa.RTIInputSystemServiceSession, P2 = cocoa.NSString>(_inputSystemService: P0, _inputSessionDidPause: P1, _withReason: P2): R;
    inputSystemService_inputSessionDocumentDidChange<R = void, P0 = cocoa.RTIInputSystemService, P1 = cocoa.RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDocumentDidChange: P1): R;
    inputSystemService_inputSessionDidDie<R = void, P0 = cocoa.RTIInputSystemService, P1 = cocoa.RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDidDie: P1): R;
    inputSystemService_inputSessionDidEnd<R = void, P0 = cocoa.RTIInputSystemService, P1 = cocoa.RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDidEnd: P1): R;
    inputSystemService_inputSessionDidBegin<R = void, P0 = cocoa.RTIInputSystemService, P1 = cocoa.RTIInputSystemServiceSession>(_inputSystemService: P0, _inputSessionDidBegin: P1): R;
  }
  namespace classes {
    export interface RTIInputSystemDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const RTIInputSystemDelegateProtocol: cocoa.classes.RTIInputSystemDelegateProtocol;
