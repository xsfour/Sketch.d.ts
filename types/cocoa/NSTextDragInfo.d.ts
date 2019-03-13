/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextDragInfo<T = any> extends NSObject {
    dealloc<R = void>(): R;
    dragAnimationOverlay<R = NSView>(): R;
    setDragAnimationOverlay<R = void, P0 = NSView>(_v: P0): R;
    draggingLinkedFile<R = boolean>(): R;
    setDraggingLinkedFile<R = void, P0 = boolean>(_v: P0): R;
    savedImageValid<R = boolean>(): R;
    setSavedImageValid<R = void, P0 = boolean>(_v: P0): R;
    cacheFromUnderIndicator<R = NSViewWindowBackingStoreBuffer>(): R;
    setCacheFromUnderIndicator<R = void, P0 = NSViewWindowBackingStoreBuffer>(_v: P0): R;
    indicatorViewRect<R = CGRect>(): R;
    setIndicatorViewRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface NSTextDragInfo<T = any> extends NSObject {
      alloc<R = NSTextDragInfo>(): R;
      new: <R = NSTextDragInfo>() => R;
    }
  }
}

declare const NSTextDragInfo: cocoa.classes.NSTextDragInfo;
