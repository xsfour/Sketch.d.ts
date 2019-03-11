/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAboutLinkButton<T = any> extends cocoa.MSHoverButton {}
  namespace classes {
    export interface MSAboutLinkButton<T = any> extends cocoa.classes.MSHoverButton {
      alloc<R = MSAboutLinkButton>(): R;
      new: <R = MSAboutLinkButton>() => R;
    }
  }
}

declare const MSAboutLinkButton: cocoa.classes.MSAboutLinkButton;
