/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingWindowDestinationProtocol<T = any> extends cocoa.NSObjectProtocol {
    destinationForTabDragOperation<R = cocoa.NSTabDraggingDestination, P0 = cocoa.NSTabDraggingInfo>(_destinationForTabDragOperation: P0): R;
  }
  namespace classes {
    export interface NSTabDraggingWindowDestinationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTabDraggingWindowDestinationProtocol: cocoa.classes.NSTabDraggingWindowDestinationProtocol;
