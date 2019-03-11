/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonWindowFrame<T = any> extends cocoa.NSView {
    aspectRatio<R = cocoa.CGSize>(): R;
    setAspectRatio<R = void, P0 = cocoa.CGSize>(_setAspectRatio: P0): R;
    resizeIncrements<R = cocoa.CGSize>(): R;
    setResizeIncrements<R = void, P0 = cocoa.CGSize>(_setResizeIncrements: P0): R;
    contentAlpha<R = number>(): R;
    contentFill<R = unknown>(): R;
    _sheetHeightAdjustment<R = number>(): R;
    _setNonactivatingPanel<R = void, P0 = boolean>(__setNonactivatingPanel: P0): R;
    titlebarRect<R = cocoa.CGRect>(): R;
    title<R = unknown>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    isOpaque<R = boolean>(): R;
    dragRectForFrameRect<R = cocoa.CGRect, P0 = cocoa.CGRect>(_dragRectForFrameRect: P0): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    styleMask<R = number>(): R;
    zoomButton<R = unknown>(): R;
    minimizeButton<R = unknown>(): R;
    closeButton<R = unknown>(): R;
    _distanceFromToolbarBaseToTitlebar<R = number>(): R;
    _hideToolbarWithAnimation<R = void, P0 = boolean>(__hideToolbarWithAnimation: P0): R;
    _showToolbarWithAnimation<R = void, P0 = boolean>(__showToolbarWithAnimation: P0): R;
    _toolbarIsManagedByExternalWindow<R = boolean>(): R;
    _toolbarIsHidden<R = boolean>(): R;
    _toolbarIsShown<R = boolean>(): R;
    _toolbarIsInTransition<R = boolean>(): R;
    _canHaveToolbar<R = boolean>(): R;
    _updateButtonState<R = void>(): R;
    _setSheet<R = void, P0 = boolean>(__setSheet: P0): R;
    _setFrameNeedsDisplay<R = void, P0 = boolean>(__setFrameNeedsDisplay: P0): R;
    initWithFrame_styleMask_owner<R = unknown, P0 = cocoa.CGRect, P1 = number, P2 = unknown>(_initWithFrame: P0, _styleMask: P1, _owner: P2): R;
    minFrameSizeForMinContentSize_styleMask<R = cocoa.CGSize, P0 = cocoa.CGSize, P1 = number>(_minFrameSizeForMinContentSize: P0, _styleMask: P1): R;
    contentRectForFrameRect_styleMask<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    frameRectForContentRect_styleMask<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
  }
  namespace classes {
    export interface NSCarbonWindowFrame<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCarbonWindowFrame>(): R;
      new: <R = NSCarbonWindowFrame>() => R;
    }
  }
}

declare const NSCarbonWindowFrame: cocoa.classes.NSCarbonWindowFrame;
