/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileDividerWindow<T = any> extends cocoa.NSPanel {
    _endLiveResizeAtDividerLocation<R = void, P0 = number>(__endLiveResizeAtDividerLocation: P0): R;
    _liveResizeToDividerLocation<R = void, P0 = number>(__liveResizeToDividerLocation: P0): R;
    _forceOverlayPresentation<R = void>(): R;
    _startLiveResizeWithOverlay<R = void, P0 = boolean>(__startLiveResizeWithOverlay: P0): R;
    drivingLiveResize<R = boolean>(): R;
    resizeToFiftyFifty<R = void>(): R;
    shouldAbortLiveResize<R = boolean>(): R;
    abortLiveResize<R = void>(): R;
    performDividerDragWithEvent<R = boolean, P0 = unknown>(_performDividerDragWithEvent: P0): R;
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    resizeCursor<R = unknown>(): R;
    horizontalIndex<R = number>(): R;
    verticalIndex<R = number>(): R;
    direction<R = number>(): R;
    spacing<R = cocoa.CGSize>(): R;
    space<R = unknown>(): R;
    tileSpaceID<R = number>(): R;
    parentSpaceID<R = number>(): R;
    setAsActiveTileDividerWindow<R = void>(): R;
    reshape<R = void>(): R;
    initWithTileSpace_direction_space<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initWithTileSpace: P0, _direction: P1, _space: P2): R;
    cancelOverlayAnimations<R = void>(): R;
    _removeOverlayWindow<R = void>(): R;
    _updateOverlayWindow<R = void>(): R;
    _beginOverlayPresentationIfNeeded<R = void>(): R;
    _setupOverlayWindowImmediately<R = void, P0 = boolean>(__setupOverlayWindowImmediately: P0): R;
    hideGrabBar<R = void>(): R;
    showGrabBar<R = void>(): R;
    showRolloverState<R = void, P0 = boolean>(_showRolloverState: P0): R;
    _grabber<R = unknown>(): R;
    overrideDrivingLiveResize<R = boolean>(): R;
    setOverrideDrivingLiveResize<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenTileDividerWindow<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSFullScreenTileDividerWindow>(): R;
      new: <R = _NSFullScreenTileDividerWindow>() => R;
      tileGrabBarWithSize<R = unknown, P0 = cocoa.CGSize>(_tileGrabBarWithSize: P0): R;
    }
  }
}
