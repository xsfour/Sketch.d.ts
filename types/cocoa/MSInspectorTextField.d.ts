/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTextField<T = any> extends cocoa.NSTextField {}
  namespace classes {
    export interface MSInspectorTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = MSInspectorTextField>(): R;
      new: <R = MSInspectorTextField>() => R;
    }
  }
}

declare const MSInspectorTextField: cocoa.classes.MSInspectorTextField;
