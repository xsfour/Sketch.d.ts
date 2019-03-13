/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAboutLinkButton<T = any> extends MSHoverButton {}
  namespace classes {
    export interface MSAboutLinkButton<T = any> extends MSHoverButton {
      alloc<R = MSAboutLinkButton>(): R;
      new: <R = MSAboutLinkButton>() => R;
    }
  }
}

declare const MSAboutLinkButton: cocoa.classes.MSAboutLinkButton;
