/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomToolTipDrawView<T = any> extends cocoa.NSView {
    allowsVibrancy<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    margin<R = cocoa.CGSize>(): R;
    setMargin<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    attributedString<R = cocoa.NSAttributedString>(): R;
    setAttributedString<R = void, P0 = cocoa.NSAttributedString>(_v: P0): R;
    toolTipObject<R = cocoa.NSToolTip>(): R;
    setToolTipObject<R = void, P0 = cocoa.NSToolTip>(_v: P0): R;
  }
  namespace classes {
    export interface NSCustomToolTipDrawView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCustomToolTipDrawView>(): R;
      new: <R = NSCustomToolTipDrawView>() => R;
    }
  }
}

declare const NSCustomToolTipDrawView: cocoa.classes.NSCustomToolTipDrawView;
