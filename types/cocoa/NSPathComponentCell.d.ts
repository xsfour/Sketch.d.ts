/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPathComponentCell<T = any> extends cocoa.NSTextFieldCell {
    titleRectForBounds_imageRect<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = cocoa.CGRect>(_titleRectForBounds: P0, _imageRect: P1): R;
    _effectiveArrowBackgroundStyleInView<R = number, P0 = unknown>(__effectiveArrowBackgroundStyleInView: P0): R;
    _shouldDrawRTL<R = boolean>(): R;
    _shouldHighlightDropTarget<R = boolean>(): R;
    _iconSize<R = cocoa.CGSize>(): R;
    _drawNavigationBarBackgroundWithFrame_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(__drawNavigationBarBackgroundWithFrame: P0, _inView: P1): R;
    _setCurrentWidth<R = void, P0 = number>(__setCurrentWidth: P0): R;
    _currentWidth<R = number>(): R;
    _setResizedWidth<R = void, P0 = number>(__setResizedWidth: P0): R;
    _resizedWidth<R = number>(): R;
    _compareToCell<R = number, P0 = unknown>(__compareToCell: P0): R;
    _minWidth<R = number>(): R;
    _fullWidth<R = number>(): R;
    _overlapAmount<R = number>(): R;
    _setShouldDrawArrowYes<R = void>(): R;
    _setShouldDrawArrow<R = void, P0 = boolean>(__setShouldDrawArrow: P0): R;
    _shouldDrawArrow<R = boolean>(): R;
    _setIsLastItem<R = void, P0 = boolean>(__setIsLastItem: P0): R;
    _isLastItem<R = boolean>(): R;
    _setIsFirstItem<R = void, P0 = boolean>(__setIsFirstItem: P0): R;
    _isFirstItem<R = boolean>(): R;
    _setDrawsAsNavigationBar<R = void, P0 = boolean>(__setDrawsAsNavigationBar: P0): R;
    _drawsAsNavigationBar<R = boolean>(): R;
    setBaseWritingDirection<R = void, P0 = number>(_setBaseWritingDirection: P0): R;
    _setIsDropTarget<R = void, P0 = boolean>(__setIsDropTarget: P0): R;
    _isDropTarget<R = boolean>(): R;
    description<R = unknown>(): R;
    URL<R = cocoa.NSURL>(): R;
    setURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSPathComponentCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSPathComponentCell>(): R;
      new: <R = NSPathComponentCell>() => R;
      _iconSizeForControlSize<R = cocoa.CGSize, P0 = number>(__iconSizeForControlSize: P0): R;
    }
  }
}

declare const NSPathComponentCell: cocoa.classes.NSPathComponentCell;
