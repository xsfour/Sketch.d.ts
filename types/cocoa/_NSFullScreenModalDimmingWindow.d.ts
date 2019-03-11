/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenModalDimmingWindow<T = any> extends cocoa.NSPanel {
    moveToSpace<R = void>(): R;
    endPresentationWithIncomingWindowSnapshot_startingFrame_forSendDocument_completionHandler<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = boolean, P3 = cocoa.CDUnknownBlockType>(_endPresentationWithIncomingWindowSnapshot: P0, _startingFrame: P1, _forSendDocument: P2, _completionHandler: P3): R;
    beginPresentationWithIncomingWindowSnapshot_targetFrame_completionHandler<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = cocoa.CDUnknownBlockType>(_beginPresentationWithIncomingWindowSnapshot: P0, _targetFrame: P1, _completionHandler: P2): R;
    _createDimLayerIfNeeded<R = void>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    isMovable<R = boolean>(): R;
    initWithStackController<R = unknown, P0 = unknown>(_initWithStackController: P0): R;
    delegate<R = cocoa._NSFullScreenModalDimmingWindowDelegate>(): R;
    setDelegate<R = void, P0 = cocoa._NSFullScreenModalDimmingWindowDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenModalDimmingWindow<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSFullScreenModalDimmingWindow>(): R;
      new: <R = _NSFullScreenModalDimmingWindow>() => R;
    }
  }
}
