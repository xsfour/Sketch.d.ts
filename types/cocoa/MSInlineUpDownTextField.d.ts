/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownTextField<T = any> extends cocoa.MSUpDownTextField {
    updateCursor<R = void>(): R;
    updateUpDownLabel<R = void>(): R;
    inlineToolTip<R = cocoa.NSString>(): R;
    setInlineToolTip<R = void, P0 = cocoa.NSString>(_v: P0): R;
    inlineLabelField<R = cocoa.NSTextField>(): R;
    setInlineLabelField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    inlineImage<R = cocoa.NSImage>(): R;
    setInlineImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    inlineLabel<R = cocoa.NSString>(): R;
    setInlineLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    inlineFieldWidth<R = number>(): R;
    upDownController<R = cocoa.MSUpDownController>(): R;
    setUpDownController<R = void, P0 = cocoa.MSUpDownController>(_v: P0): R;
  }
  namespace classes {
    export interface MSInlineUpDownTextField<T = any> extends cocoa.classes.MSUpDownTextField {
      alloc<R = MSInlineUpDownTextField>(): R;
      new: <R = MSInlineUpDownTextField>() => R;
    }
  }
}

declare const MSInlineUpDownTextField: cocoa.classes.MSInlineUpDownTextField;
