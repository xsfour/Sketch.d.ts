/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFilterTokenButton<T = any> extends NSButton {}
  namespace classes {
    export interface BCFilterTokenButton<T = any> extends NSButton {
      alloc<R = BCFilterTokenButton>(): R;
      new: <R = BCFilterTokenButton>() => R;
    }
  }
}

declare const BCFilterTokenButton: cocoa.classes.BCFilterTokenButton;
