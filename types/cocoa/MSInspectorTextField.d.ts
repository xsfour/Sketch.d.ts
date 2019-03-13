/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTextField<T = any> extends NSTextField {}
  namespace classes {
    export interface MSInspectorTextField<T = any> extends NSTextField {
      alloc<R = MSInspectorTextField>(): R;
      new: <R = MSInspectorTextField>() => R;
    }
  }
}

declare const MSInspectorTextField: cocoa.classes.MSInspectorTextField;
