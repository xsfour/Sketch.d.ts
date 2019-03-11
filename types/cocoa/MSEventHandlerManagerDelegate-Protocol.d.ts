/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEventHandlerManagerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    eventHandlerManager_didChangeCurrentHandler<R = void, P0 = cocoa.MSEventHandlerManager, P1 = cocoa.MSEventHandler>(_eventHandlerManager: P0, _didChangeCurrentHandler: P1): R;
  }
  namespace classes {
    export interface MSEventHandlerManagerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSEventHandlerManagerDelegateProtocol: cocoa.classes.MSEventHandlerManagerDelegateProtocol;
