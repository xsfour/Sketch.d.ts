/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingDestinationProtocol<T = any> {
    updateDraggingItemsForDrag<R = void, P0 = cocoa.NSDraggingInfo>(_updateDraggingItemsForDrag: P0): R;
    wantsPeriodicDraggingUpdates<R = boolean>(): R;
    draggingEnded<R = void, P0 = cocoa.NSDraggingInfo>(_draggingEnded: P0): R;
    concludeDragOperation<R = void, P0 = cocoa.NSDraggingInfo>(_concludeDragOperation: P0): R;
    performDragOperation<R = boolean, P0 = cocoa.NSDraggingInfo>(_performDragOperation: P0): R;
    prepareForDragOperation<R = boolean, P0 = cocoa.NSDraggingInfo>(_prepareForDragOperation: P0): R;
    draggingExited<R = void, P0 = cocoa.NSDraggingInfo>(_draggingExited: P0): R;
    draggingUpdated<R = number, P0 = cocoa.NSDraggingInfo>(_draggingUpdated: P0): R;
    draggingEntered<R = number, P0 = cocoa.NSDraggingInfo>(_draggingEntered: P0): R;
  }
  namespace classes {
    export interface NSDraggingDestinationProtocol<T = any> {  }
  }
}

declare const NSDraggingDestinationProtocol: cocoa.classes.NSDraggingDestinationProtocol;
