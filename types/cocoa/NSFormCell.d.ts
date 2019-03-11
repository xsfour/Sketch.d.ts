/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFormCell<T = any> extends cocoa.NSActionCell {
    _layoutTitleRect_interiorChromeRect_interiorTextRect_withFrame_inView<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGRect, P2 = cocoa.CGRect, P3 = cocoa.CGRect, P4 = unknown>(__layoutTitleRect: P0, _interiorChromeRect: P1, _interiorTextRect: P2, _withFrame: P3, _inView: P4): R;
    _titleRectForCellFrame<R = cocoa.CGRect, P0 = cocoa.CGRect>(__titleRectForCellFrame: P0): R;
    _drawLiveResizeHighlightWithFrame_inView<R = void, P0 = cocoa.CGRect, P1 = unknown>(__drawLiveResizeHighlightWithFrame: P0, _inView: P1): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    setUserInterfaceLayoutDirection<R = void, P0 = number>(_setUserInterfaceLayoutDirection: P0): R;
    setAttributedTitle<R = void, P0 = unknown>(_setAttributedTitle: P0): R;
    attributedTitle<R = unknown>(): R;
    titleWidth<R = number, P0 = cocoa.CGSize>(_titleWidth: P0): R;
    _updateFormAlignmentForUserInterfaceLayoutDirection<R = void>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    _accessibilityTitleRect<R = cocoa.CGRect>(): R;
    accessibilityIsPlaceholderValueAttributeSettable<R = boolean>(): R;
    accessibilityPlaceholderValueAttribute<R = unknown>(): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
    accessibilityIsTitleUIElementAttributeSettable<R = boolean>(): R;
    accessibilityTitleUIElementAttribute<R = unknown>(): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    titleBaseWritingDirection<R = number>(): R;
    setTitleBaseWritingDirection<R = void, P0 = number>(_v: P0): R;
    placeholderAttributedString<R = cocoa.NSAttributedString>(): R;
    setPlaceholderAttributedString<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    placeholderString<R = cocoa.NSString>(): R;
    setPlaceholderString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    opaque<R = boolean>(): R;
    titleAlignment<R = number>(): R;
    setTitleAlignment<R = void, P0 = number>(_v: P0): R;
    titleFont<R = cocoa.NSFont>(): R;
    setTitleFont<R = void, P0 = cocoa.NSFont>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    preferredTextFieldWidth<R = number>(): R;
    setPreferredTextFieldWidth<R = void, P0 = number>(_v: P0): R;
    titleWidth<R = number>(): R;
    setTitleWidth<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSFormCell<T = any> extends cocoa.classes.NSActionCell {
      alloc<R = NSFormCell>(): R;
      new: <R = NSFormCell>() => R;
    }
  }
}

declare const NSFormCell: cocoa.classes.NSFormCell;
