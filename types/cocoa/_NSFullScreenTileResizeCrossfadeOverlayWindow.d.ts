/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileResizeCrossfadeOverlayWindow<T = any> extends NSPanel {
    disableAutomaticTermination<R = void>(): R;
    enableAutomaticTermination<R = void>(): R;
    animateSwapWithDuration_completionHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_animateSwapWithDuration: P0, _completionHandler: P1): R;
    configureAnimationToFinalStateWithDuration<R = void, P0 = number>(_configureAnimationToFinalStateWithDuration: P0): R;
    closingTileTargetFrame<R = CGRect>(): R;
    captureAfterWindowsUsingTileFrame<R = void, P0 = CGRect>(_captureAfterWindowsUsingTileFrame: P0): R;
    captureBeforeWindowsUsingTileFrame<R = void, P0 = CGRect>(_captureBeforeWindowsUsingTileFrame: P0): R;
    doFinalBeforeSetupWithAfterFrame<R = void, P0 = CGRect>(_doFinalBeforeSetupWithAfterFrame: P0): R;
    windowIDsForCaptureOnSpace<R = unknown, P0 = number>(_windowIDsForCaptureOnSpace: P0): R;
    windowIDsForCaptureOnSpace_predicate<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_windowIDsForCaptureOnSpace: P0, _predicate: P1): R;
    initWithTileID_parentSpaceID_closingSpaceID_screen_doResize_placeInWallSpace<R = unknown, P0 = number, P1 = number, P2 = number, P3 = unknown, P4 = boolean, P5 = boolean>(_initWithTileID: P0, _parentSpaceID: P1, _closingSpaceID: P2, _screen: P3, _doResize: P4, _placeInWallSpace: P5): R;
    openingSpaceID<R = number>(): R;
    setOpeningSpaceID<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenTileResizeCrossfadeOverlayWindow<T = any> extends NSPanel {
      alloc<R = _NSFullScreenTileResizeCrossfadeOverlayWindow>(): R;
      new: <R = _NSFullScreenTileResizeCrossfadeOverlayWindow>() => R;
    }
  }
}
