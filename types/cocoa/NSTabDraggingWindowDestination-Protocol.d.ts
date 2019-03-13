/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingWindowDestinationProtocol<T = any> extends NSObjectProtocol {
    destinationForTabDragOperation<R = NSTabDraggingDestination, P0 = NSTabDraggingInfo>(_destinationForTabDragOperation: P0): R;
  }
  namespace classes {
    export interface NSTabDraggingWindowDestinationProtocol<T = any> extends NSObjectProtocol {  }
  }
}
