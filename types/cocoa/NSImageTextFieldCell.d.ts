/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageTextFieldCell<T = any> extends cocoa.NSTextFieldCell, cocoa.NSOutlineViewInlineOutlineCellProtocol {
    _spacingFromImageToText<R = number>(): R;
    _currentFontSize<R = number>(): R;
    outlineCellFrame<R = cocoa.CGRect>(): R;
    setOutlineCellFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    imageSize<R = number>(): R;
    rowSizeStyle<R = number>(): R;
    setRowSizeStyle<R = void, P0 = number>(_v: P0): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSImageTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell, cocoa.classes.NSOutlineViewInlineOutlineCellProtocol {
      alloc<R = NSImageTextFieldCell>(): R;
      new: <R = NSImageTextFieldCell>() => R;
      _sourceListFont<R = unknown>(): R;
    }
  }
}

declare const NSImageTextFieldCell: cocoa.classes.NSImageTextFieldCell;
