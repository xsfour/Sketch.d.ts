/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    handlePortMessage<R = void, P0 = cocoa.NSPortMessage>(_handlePortMessage: P0): R;
  }
  namespace classes {
    export interface NSPortDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSPortDelegateProtocol: cocoa.classes.NSPortDelegateProtocol;
