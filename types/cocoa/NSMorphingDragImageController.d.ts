/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMorphingDragImageController<T = any> extends NSObject, NSTearOffTabWindowDelegateProtocol {
    cxx_destruct<R = void>(): R;
    _morphToDragImage<R = void, P0 = unknown>(__morphToDragImage: P0): R;
    _updateDragImageForCurrentDragState<R = void>(): R;
    _dropOpensNewWindow<R = boolean>(): R;
    _sendMovedToPointOnScreenToDragSource<R = void>(): R;
    _setTargetUnderMouse<R = void, P0 = unknown>(__setTargetUnderMouse: P0): R;
    _draggingDidExitTargetWindow<R = void>(): R;
    _draggingDidEnterTargetWindow<R = void>(): R;
    _performSprintToFront<R = void, P0 = unknown>(__performSprintToFront: P0): R;
    _setWindowUnderMouse<R = void, P0 = unknown>(__setWindowUnderMouse: P0): R;
    _findWindowUnderMouse_level_viewUnderMouse<R = void, P0 = unknown, P1 = number, P2 = unknown>(__findWindowUnderMouse: P0, _level: P1, _viewUnderMouse: P2): R;
    _dragInfoForNoTargetUnderMouse<R = unknown>(): R;
    _dragInfoForTargetUnderMouseInWindow<R = unknown, P0 = unknown>(__dragInfoForTargetUnderMouseInWindow: P0): R;
    _dragInfoForTargetUnderMouse<R = unknown>(): R;
    _animateSlideBack<R = void>(): R;
    _dragComplete<R = void>(): R;
    _applicationDidResignActive<R = void>(): R;
    _firePeriodicEvent<R = void, P0 = unknown>(__firePeriodicEvent: P0): R;
    _stopPeriodicEventTimer<R = void>(): R;
    _startPeriodicEventTimerIfNeeded<R = void>(): R;
    _beginSlideBackAnimation<R = void>(): R;
    _handleMouseUp<R = void>(): R;
    _dropTabOnScreenIfPossible<R = boolean>(): R;
    _didAcceptDrop<R = boolean>(): R;
    _canPerformTabDrag<R = boolean>(): R;
    _handleFlagsChanged<R = void>(): R;
    _handleMouseDragged<R = void>(): R;
    _handleEvent<R = void, P0 = unknown>(__handleEvent: P0): R;
    _runDrag<R = void>(): R;
    _prepareForDragWithImage<R = void, P0 = unknown>(__prepareForDragWithImage: P0): R;
    _dragTabWithDraggingItem_tabButtonImage_pinnedTabButtonImage_windowImage_fromView_at_source<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = CGPoint, P6 = unknown>(__dragTabWithDraggingItem: P0, _tabButtonImage: P1, _pinnedTabButtonImage: P2, _windowImage: P3, _fromView: P4, _at: P5, _source: P6): R;
    dealloc<R = void>(): R;
    dragWindow<R = NSTearOffTabWindow>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSMorphingDragImageController<T = any> extends NSObject, NSTearOffTabWindowDelegateProtocol {
      alloc<R = NSMorphingDragImageController>(): R;
      new: <R = NSMorphingDragImageController>() => R;
      dragTabWithDraggingItem_tabButtonImage_pinnedTabButtonImage_windowImage_fromView_at_source<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = CGPoint, P6 = unknown>(_dragTabWithDraggingItem: P0, _tabButtonImage: P1, _pinnedTabButtonImage: P2, _windowImage: P3, _fromView: P4, _at: P5, _source: P6): R;
    }
  }
}

declare const NSMorphingDragImageController: cocoa.classes.NSMorphingDragImageController;
