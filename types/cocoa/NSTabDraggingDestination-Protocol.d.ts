/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabDraggingDestinationProtocol<T = any> extends cocoa.NSObjectProtocol {
    willPinTabForTabDragOperation<R = boolean, P0 = cocoa.NSTabDraggingInfo>(_willPinTabForTabDragOperation: P0): R;
    wantsPeriodicTabDraggingUpdates<R = boolean>(): R;
    tabDraggingEnded<R = void, P0 = cocoa.NSTabDraggingInfo>(_tabDraggingEnded: P0): R;
    concludeTabDragOperation<R = void, P0 = cocoa.NSTabDraggingInfo>(_concludeTabDragOperation: P0): R;
    performTabDragOperation<R = boolean, P0 = cocoa.NSTabDraggingInfo>(_performTabDragOperation: P0): R;
    prepareForTabDragOperation<R = boolean, P0 = cocoa.NSTabDraggingInfo>(_prepareForTabDragOperation: P0): R;
    tabDraggingExited<R = void, P0 = cocoa.NSTabDraggingInfo>(_tabDraggingExited: P0): R;
    tabDraggingUpdated<R = number, P0 = cocoa.NSTabDraggingInfo>(_tabDraggingUpdated: P0): R;
    tabDraggingEntered<R = number, P0 = cocoa.NSTabDraggingInfo>(_tabDraggingEntered: P0): R;
  }
  namespace classes {
    export interface NSTabDraggingDestinationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTabDraggingDestinationProtocol: cocoa.classes.NSTabDraggingDestinationProtocol;
