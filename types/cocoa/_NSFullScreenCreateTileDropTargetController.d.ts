/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenCreateTileDropTargetController<T = any> extends cocoa.NSObject {
    windowDidEndDraggingNotification<R = void, P0 = unknown>(_windowDidEndDraggingNotification: P0): R;
    acceptDropForTearOffTabWindow<R = boolean, P0 = unknown>(_acceptDropForTearOffTabWindow: P0): R;
    _handleWindowDropIfNecessary<R = boolean>(): R;
    dragWouldPerformDrop<R = boolean>(): R;
    _performDropIntoPosition<R = void, P0 = number>(__performDropIntoPosition: P0): R;
    windowWillStartDraggingNotification<R = void, P0 = unknown>(_windowWillStartDraggingNotification: P0): R;
    updateWindowDuringDragNotification<R = void, P0 = unknown>(_updateWindowDuringDragNotification: P0): R;
    _dismissDropTargets<R = void>(): R;
    _dismissRightDropTarget<R = void>(): R;
    _revealRightDropTarget<R = void>(): R;
    _cleanUpRightDropTargetIfNeeded<R = void>(): R;
    _dismissLeftDropTarget<R = void>(): R;
    _revealLeftDropTarget<R = void>(): R;
    _cleanUpLeftDropTargetIfNeeded<R = void>(): R;
    _rightCollapsedRect<R = cocoa.CGRect>(): R;
    _rightDropRect<R = cocoa.CGRect>(): R;
    _leftCollapsedRect<R = cocoa.CGRect>(): R;
    _leftDropRect<R = cocoa.CGRect>(): R;
    _startTrackingWindowDrag<R = void, P0 = unknown>(__startTrackingWindowDrag: P0): R;
    _stopTrackingWindowDrag<R = void>(): R;
    resetState<R = void>(): R;
    backgroundWindowIDs<R = unknown>(): R;
    reshapeContents<R = void>(): R;
    displayChanged<R = void>(): R;
    _registerForNotifications<R = void, P0 = boolean>(__registerForNotifications: P0): R;
    dealloc<R = void>(): R;
    space<R = cocoa._NSFullScreenSpace>(): R;
    setSpace<R = void, P0 = cocoa._NSFullScreenSpace>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenCreateTileDropTargetController<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFullScreenCreateTileDropTargetController>(): R;
      new: <R = _NSFullScreenCreateTileDropTargetController>() => R;
    }
  }
}
