/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenCreateTileDropTargetWindow<T = any> extends cocoa.NSPanel {
    moveToSpace<R = void>(): R;
    animateRevealWithAdditionalMoveBlock_completionBlock<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_animateRevealWithAdditionalMoveBlock: P0, _completionBlock: P1): R;
    animateHideWithAdditionalMoveBlock_completionBlock<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_animateHideWithAdditionalMoveBlock: P0, _completionBlock: P1): R;
    isRevealed<R = boolean>(): R;
    isAnimating<R = boolean>(): R;
    setDropRect_collapsedRect<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGRect>(_setDropRect: P0, _collapsedRect: P1): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    isMovable<R = boolean>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenCreateTileDropTargetWindow<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSFullScreenCreateTileDropTargetWindow>(): R;
      new: <R = _NSFullScreenCreateTileDropTargetWindow>() => R;
    }
  }
}
