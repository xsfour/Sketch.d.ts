/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingInfoPrivateProtocol<T = any> {
    _lastDragDestinationOperation<R = number>(): R;
  }
  namespace classes {
    export interface NSDraggingInfoPrivateProtocol<T = any> {  }
  }
}
