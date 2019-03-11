/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextDragInfo<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    dragAnimationOverlay<R = cocoa.NSView>(): R;
    setDragAnimationOverlay<R = void, P0 = cocoa.NSView>(_v: P0): R;
    draggingLinkedFile<R = boolean>(): R;
    setDraggingLinkedFile<R = void, P0 = boolean>(_v: P0): R;
    savedImageValid<R = boolean>(): R;
    setSavedImageValid<R = void, P0 = boolean>(_v: P0): R;
    cacheFromUnderIndicator<R = cocoa.NSViewWindowBackingStoreBuffer>(): R;
    setCacheFromUnderIndicator<R = void, P0 = cocoa.NSViewWindowBackingStoreBuffer>(_v: P0): R;
    indicatorViewRect<R = cocoa.CGRect>(): R;
    setIndicatorViewRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextDragInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTextDragInfo>(): R;
      new: <R = NSTextDragInfo>() => R;
    }
  }
}

declare const NSTextDragInfo: cocoa.classes.NSTextDragInfo;
