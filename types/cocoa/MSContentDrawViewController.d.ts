/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSContentDrawViewController<T = any> extends cocoa.NSViewController, cocoa.MSContentDrawViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    prepareForDealloc<R = void>(): R;
    changeToPage<R = void, P0 = unknown>(_changeToPage: P0): R;
    currentArtboardDidChange<R = void>(): R;
    awakeFromNib<R = void>(): R;
    document<R = cocoa.MSDocument>(): R;
    setDocument<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
    flashController<R = cocoa.MSFlashController>(): R;
    setFlashController<R = void, P0 = cocoa.MSFlashController>(_v: P0): R;
    rulerHeightConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setRulerHeightConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    rulerWidthConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setRulerWidthConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    rulerCornerView<R = cocoa.NSView>(): R;
    setRulerCornerView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    verticalRuler<R = cocoa.MSRulerView>(): R;
    setVerticalRuler<R = void, P0 = cocoa.MSRulerView>(_v: P0): R;
    horizontalRuler<R = cocoa.MSRulerView>(): R;
    setHorizontalRuler<R = void, P0 = cocoa.MSRulerView>(_v: P0): R;
    contentDrawViewParent<R = cocoa.MSContentDrawViewParent>(): R;
    setContentDrawViewParent<R = void, P0 = cocoa.MSContentDrawViewParent>(_v: P0): R;
    contentDrawView<R = cocoa.MSContentDrawView>(): R;
    setContentDrawView<R = void, P0 = cocoa.MSContentDrawView>(_v: P0): R;
    zoomValue<R = number>(): R;
    setZoomValue<R = void, P0 = number>(_v: P0): R;
    scrollOrigin<R = cocoa.CGPoint>(): R;
    setScrollOrigin<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSContentDrawViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.MSContentDrawViewDelegateProtocol {
      alloc<R = MSContentDrawViewController>(): R;
      new: <R = MSContentDrawViewController>() => R;
    }
  }
}

declare const MSContentDrawViewController: cocoa.classes.MSContentDrawViewController;
