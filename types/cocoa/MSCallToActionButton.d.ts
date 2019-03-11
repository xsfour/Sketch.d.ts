/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCallToActionButton<T = any> extends cocoa.MSHoverButton {}
  namespace classes {
    export interface MSCallToActionButton<T = any> extends cocoa.classes.MSHoverButton {
      alloc<R = MSCallToActionButton>(): R;
      new: <R = MSCallToActionButton>() => R;
    }
  }
}

declare const MSCallToActionButton: cocoa.classes.MSCallToActionButton;
