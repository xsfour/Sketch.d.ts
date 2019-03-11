/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePromiseDragSource<T = any> extends cocoa.NSObject, cocoa.NSDraggingSourceProtocol {
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    setTypes_onPasteboard<R = void, P0 = unknown, P1 = unknown>(_setTypes: P0, _onPasteboard: P1): R;
    pasteboard_provideDataForType_itemIdentifier<R = void, P0 = unknown, P1 = unknown, P2 = number>(_pasteboard: P0, _provideDataForType: P1, _itemIdentifier: P2): R;
    getFilenamesAndDropLocation<R = void>(): R;
    copyDropDirectory<R = cocoa.__CFURL>(): R;
    draggedImage_endedAt_operation<R = void, P0 = unknown, P1 = cocoa.CGPoint, P2 = number>(_draggedImage: P0, _endedAt: P1, _operation: P2): R;
    ignoreModifierKeysWhileDragging<R = boolean>(): R;
    draggedImage_movedTo<R = void, P0 = unknown, P1 = cocoa.CGPoint>(_draggedImage: P0, _movedTo: P1): R;
    draggedImage_beganAt<R = void, P0 = unknown, P1 = cocoa.CGPoint>(_draggedImage: P0, _beganAt: P1): R;
    draggingSourceOperationMaskForLocal<R = number, P0 = boolean>(_draggingSourceOperationMaskForLocal: P0): R;
    didEndDrag<R = void>(): R;
    prepareForDrag<R = void>(): R;
    dealloc<R = void>(): R;
    initWithSource<R = unknown, P0 = unknown>(_initWithSource: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSFilePromiseDragSource<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSDraggingSourceProtocol {
      alloc<R = NSFilePromiseDragSource>(): R;
      new: <R = NSFilePromiseDragSource>() => R;
    }
  }
}

declare const NSFilePromiseDragSource: cocoa.classes.NSFilePromiseDragSource;
