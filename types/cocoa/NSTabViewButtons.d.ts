/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewButtons<T = any> extends cocoa.NSView {
    allowsVibrancy<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    tabView<R = cocoa.NSTabView>(): R;
    setTabView<R = void, P0 = cocoa.NSTabView>(_v: P0): R;
  }
  namespace classes {
    export interface NSTabViewButtons<T = any> extends cocoa.classes.NSView {
      alloc<R = NSTabViewButtons>(): R;
      new: <R = NSTabViewButtons>() => R;
    }
  }
}

declare const NSTabViewButtons: cocoa.classes.NSTabViewButtons;
