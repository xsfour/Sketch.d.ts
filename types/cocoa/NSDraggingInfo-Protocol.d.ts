/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingInfoProtocol<T = any> extends cocoa.NSObjectProtocol {
    resetSpringLoading<R = void>(): R;
    enumerateDraggingItemsWithOptions_forView_classes_searchOptions_usingBlock<R = void, P0 = number, P1 = cocoa.NSView, P2 = cocoa.NSArray, P3 = cocoa.NSDictionary, P4 = cocoa.CDUnknownBlockType>(_enumerateDraggingItemsWithOptions: P0, _forView: P1, _classes: P2, _searchOptions: P3, _usingBlock: P4): R;
    namesOfPromisedFilesDroppedAtDestination<R = cocoa.NSArray, P0 = cocoa.NSURL>(_namesOfPromisedFilesDroppedAtDestination: P0): R;
    slideDraggedImageTo<R = void, P0 = cocoa.CGPoint>(_slideDraggedImageTo: P0): R;
    springLoadingHighlight<R = number>(): R;
    numberOfValidItemsForDrop<R = number>(): R;
    setNumberOfValidItemsForDrop<R = void, P0 = number>(_v: P0): R;
    animatesToDestination<R = boolean>(): R;
    setAnimatesToDestination<R = void, P0 = boolean>(_v: P0): R;
    draggingFormation<R = number>(): R;
    setDraggingFormation<R = void, P0 = number>(_v: P0): R;
    draggingSequenceNumber<R = number>(): R;
    draggingSource<R = unknown>(): R;
    draggingPasteboard<R = cocoa.NSPasteboard>(): R;
    draggedImage<R = cocoa.NSImage>(): R;
    draggedImageLocation<R = cocoa.CGPoint>(): R;
    draggingLocation<R = cocoa.CGPoint>(): R;
    draggingSourceOperationMask<R = number>(): R;
    draggingDestinationWindow<R = cocoa.NSWindow>(): R;
  }
  namespace classes {
    export interface NSDraggingInfoProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSDraggingInfoProtocol: cocoa.classes.NSDraggingInfoProtocol;
