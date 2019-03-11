/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReorderingContainerView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    startOffsetForStacking<R = number>(): R;
    destinationFramesForSubviews<R = unknown>(): R;
    reorderSubviewsAnimated<R = void, P0 = boolean>(_reorderSubviewsAnimated: P0): R;
    draggingView<R = unknown>(): R;
    numberOfReorderableSubviews<R = number>(): R;
    hoverIndexForDraggingInfo<R = number, P0 = unknown>(_hoverIndexForDraggingInfo: P0): R;
    moveDraggedViewToRowAtIndex<R = void, P0 = number>(_moveDraggedViewToRowAtIndex: P0): R;
    subViewDestinationFrames<R = cocoa.NSArray>(): R;
    setSubViewDestinationFrames<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    delegate<R = cocoa.MSReorderingContainerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSReorderingContainerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSReorderingContainerView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSReorderingContainerView>(): R;
      new: <R = MSReorderingContainerView>() => R;
    }
  }
}

declare const MSReorderingContainerView: cocoa.classes.MSReorderingContainerView;
