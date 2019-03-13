/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomToolTipDrawView<T = any> extends NSView {
    allowsVibrancy<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    margin<R = CGSize>(): R;
    setMargin<R = void, P0 = CGSize>(_v: P0): R;
    attributedString<R = NSAttributedString>(): R;
    setAttributedString<R = void, P0 = NSAttributedString>(_v: P0): R;
    toolTipObject<R = NSToolTip>(): R;
    setToolTipObject<R = void, P0 = NSToolTip>(_v: P0): R;
  }
  namespace classes {
    export interface NSCustomToolTipDrawView<T = any> extends NSView {
      alloc<R = NSCustomToolTipDrawView>(): R;
      new: <R = NSCustomToolTipDrawView>() => R;
    }
  }
}

declare const NSCustomToolTipDrawView: cocoa.classes.NSCustomToolTipDrawView;
