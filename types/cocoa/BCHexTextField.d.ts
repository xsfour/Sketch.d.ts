/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHexTextField<T = any> extends NSTextField {}
  namespace classes {
    export interface BCHexTextField<T = any> extends NSTextField {
      alloc<R = BCHexTextField>(): R;
      new: <R = BCHexTextField>() => R;
    }
  }
}

declare const BCHexTextField: cocoa.classes.BCHexTextField;
