/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeFrameTitleTextField<T = any> extends cocoa.NSView {
    allowsVibrancy<R = boolean>(): R;
    setTextColor<R = void, P0 = unknown>(_setTextColor: P0): R;
    isFlipped<R = boolean>(): R;
    invalidateOnFrameOriginChange<R = boolean>(): R;
    setInvalidateOnFrameOriginChange<R = void, P0 = boolean>(_v: P0): R;
    attributedStringValue<R = cocoa.NSAttributedString>(): R;
    setAttributedStringValue<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
  }
  namespace classes {
    export interface NSThemeFrameTitleTextField<T = any> extends cocoa.classes.NSView {
      alloc<R = NSThemeFrameTitleTextField>(): R;
      new: <R = NSThemeFrameTitleTextField>() => R;
    }
  }
}

declare const NSThemeFrameTitleTextField: cocoa.classes.NSThemeFrameTitleTextField;
