/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAboutLinkButtonCell<T = any> extends MSHoverButtonCell {}
  namespace classes {
    export interface MSAboutLinkButtonCell<T = any> extends MSHoverButtonCell {
      alloc<R = MSAboutLinkButtonCell>(): R;
      new: <R = MSAboutLinkButtonCell>() => R;
    }
  }
}

declare const MSAboutLinkButtonCell: cocoa.classes.MSAboutLinkButtonCell;
