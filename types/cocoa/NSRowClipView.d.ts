/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRowClipView<T = any> extends cocoa.NSClipView, cocoa.CAAnimationDelegateProtocol {
    _updateBoundsForSize<R = void, P0 = cocoa.CGSize>(__updateBoundsForSize: P0): R;
    _useZinLayerBacking<R = boolean>(): R;
    shouldAdjustBounds<R = boolean>(): R;
    setShouldAdjustBounds<R = void, P0 = boolean>(_v: P0): R;
    fromYPosition<R = number>(): R;
    setFromYPosition<R = void, P0 = number>(_v: P0): R;
    animationFinishedHandler<R = cocoa.CDUnknownBlockType>(): R;
    setAnimationFinishedHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    targetFrame<R = cocoa.CGRect>(): R;
    setTargetFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    forDeletion<R = boolean>(): R;
    setForDeletion<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSRowClipView<T = any> extends cocoa.classes.NSClipView, cocoa.classes.CAAnimationDelegateProtocol {
      alloc<R = NSRowClipView>(): R;
      new: <R = NSRowClipView>() => R;
    }
  }
}

declare const NSRowClipView: cocoa.classes.NSRowClipView;
