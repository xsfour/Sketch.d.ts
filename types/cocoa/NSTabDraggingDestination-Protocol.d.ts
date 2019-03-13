/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingDestinationProtocol<T = any> extends NSObjectProtocol {
    willPinTabForTabDragOperation<R = boolean, P0 = NSTabDraggingInfo>(_willPinTabForTabDragOperation: P0): R;
    wantsPeriodicTabDraggingUpdates<R = boolean>(): R;
    tabDraggingEnded<R = void, P0 = NSTabDraggingInfo>(_tabDraggingEnded: P0): R;
    concludeTabDragOperation<R = void, P0 = NSTabDraggingInfo>(_concludeTabDragOperation: P0): R;
    performTabDragOperation<R = boolean, P0 = NSTabDraggingInfo>(_performTabDragOperation: P0): R;
    prepareForTabDragOperation<R = boolean, P0 = NSTabDraggingInfo>(_prepareForTabDragOperation: P0): R;
    tabDraggingExited<R = void, P0 = NSTabDraggingInfo>(_tabDraggingExited: P0): R;
    tabDraggingUpdated<R = number, P0 = NSTabDraggingInfo>(_tabDraggingUpdated: P0): R;
    tabDraggingEntered<R = number, P0 = NSTabDraggingInfo>(_tabDraggingEntered: P0): R;
  }
  namespace classes {
    export interface NSTabDraggingDestinationProtocol<T = any> extends NSObjectProtocol {  }
  }
}
