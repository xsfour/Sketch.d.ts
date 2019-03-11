/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTokenButton<T = any> extends cocoa.NSButton {}
  namespace classes {
    export interface BCFilterTokenButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = BCFilterTokenButton>(): R;
      new: <R = BCFilterTokenButton>() => R;
    }
  }
}

declare const BCFilterTokenButton: cocoa.classes.BCFilterTokenButton;
