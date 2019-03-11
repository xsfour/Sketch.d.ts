/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBrowserCell<T = any> extends cocoa.NSCell {
    interiorBackgroundStyle<R = number>(): R;
    _drawFillWithFrame_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(__drawFillWithFrame: P0, _inView: P1): R;
    _drawLiveResizeHighlightWithFrame_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(__drawLiveResizeHighlightWithFrame: P0, _inView: P1): R;
    highlightColorInView<R = unknown, P0 = unknown>(_highlightColorInView: P0): R;
    _checkLoaded_rect_highlight<R = boolean, P0 = unknown, P1 = cocoa.CGRect, P2 = number>(__checkLoaded: P0, _rect: P1, _highlight: P2): R;
    set<R = void>(): R;
    reset<R = void>(): R;
    _isLoaded<R = boolean>(): R;
    _titleReservedRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(__titleReservedRectForBounds: P0): R;
    _browserCell_imageRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(__browserCell_imageRectForBounds: P0): R;
    _imageReservedRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(__imageReservedRectForBounds: P0): R;
    _branchImageRectForBounds_inView<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(__branchImageRectForBounds: P0, _inView: P1): R;
    _branchImageReservedRectForBounds_inView<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(__branchImageReservedRectForBounds: P0, _inView: P1): R;
    _branchImageReservedSize<R = cocoa.CGSize>(): R;
    _imageReservedSize<R = cocoa.CGSize>(): R;
    _currentImage<R = unknown>(): R;
    _currentImageWithView<R = unknown, P0 = unknown>(__currentImageWithView: P0): R;
    _currentBranchImageWithView<R = unknown, P0 = unknown>(__currentBranchImageWithView: P0): R;
    _fillSurfaceBackgroundStyleWithView<R = number, P0 = unknown>(__fillSurfaceBackgroundStyleWithView: P0): R;
    _browserFillStyle<R = number>(): R;
    _browserBackgroundColorWithView<R = unknown, P0 = unknown>(__browserBackgroundColorWithView: P0): R;
    _enclosingBrowserForControlView<R = unknown, P0 = unknown>(__enclosingBrowserForControlView: P0): R;
    _branchImageEnabled<R = boolean>(): R;
    _setBranchImageEnabled<R = void, P0 = boolean>(__setBranchImageEnabled: P0): R;
    loaded<R = boolean>(): R;
    setLoaded<R = void, P0 = boolean>(_v: P0): R;
    leaf<R = boolean>(): R;
    setLeaf<R = void, P0 = boolean>(_v: P0): R;
    alternateImage<R = cocoa.NSImage>(): R;
    setAlternateImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSBrowserCell<T = any> extends cocoa.classes.NSCell {
      alloc<R = NSBrowserCell>(): R;
      new: <R = NSBrowserCell>() => R;
      highlightedBranchImage<R = unknown>(): R;
      branchImage<R = unknown>(): R;
    }
  }
}

declare const NSBrowserCell: cocoa.classes.NSBrowserCell;
