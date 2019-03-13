/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPlainButton<T = any> extends MSHoverButton {}
  namespace classes {
    export interface MSPlainButton<T = any> extends MSHoverButton {
      alloc<R = MSPlainButton>(): R;
      new: <R = MSPlainButton>() => R;
    }
  }
}

declare const MSPlainButton: cocoa.classes.MSPlainButton;
