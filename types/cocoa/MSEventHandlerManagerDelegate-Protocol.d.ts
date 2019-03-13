/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEventHandlerManagerDelegateProtocol<T = any> extends NSObjectProtocol {
    eventHandlerManager_didChangeCurrentHandler<R = void, P0 = MSEventHandlerManager, P1 = MSEventHandler>(_eventHandlerManager: P0, _didChangeCurrentHandler: P1): R;
  }
  namespace classes {
    export interface MSEventHandlerManagerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
