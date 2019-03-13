/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRolloverButton<T = any> extends NSButton {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    _setAttributes<R = void>(): R;
    updateMouseIsOver<R = void>(): R;
    shouldUseRolloverAppearance<R = boolean>(): R;
    _finishInitialization<R = void>(): R;
    focusRingMask<R = NSImage>(): R;
    setFocusRingMask<R = void, P0 = NSImage>(_v: P0): R;
    delegate<R = NSRolloverButtonDelegate>(): R;
    setDelegate<R = void, P0 = NSRolloverButtonDelegate>(_v: P0): R;
    redrawOnMouseEnteredAndExited<R = boolean>(): R;
    setRedrawOnMouseEnteredAndExited<R = void, P0 = boolean>(_v: P0): R;
    usesRolloverAppearanceWhenFirstResponder<R = boolean>(): R;
    setUsesRolloverAppearanceWhenFirstResponder<R = void, P0 = boolean>(_v: P0): R;
    rolloverImage<R = NSImage>(): R;
    setRolloverImage<R = void, P0 = NSImage>(_v: P0): R;
    usesRolloverAppearanceOnMouseDown<R = boolean>(): R;
    setUsesRolloverAppearanceOnMouseDown<R = void, P0 = boolean>(_v: P0): R;
    usesRolloverAppearanceInInactiveWindow<R = boolean>(): R;
    setUsesRolloverAppearanceInInactiveWindow<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSRolloverButton<T = any> extends NSButton {
      alloc<R = NSRolloverButton>(): R;
      new: <R = NSRolloverButton>() => R;
    }
  }
}

declare const NSRolloverButton: cocoa.classes.NSRolloverButton;
