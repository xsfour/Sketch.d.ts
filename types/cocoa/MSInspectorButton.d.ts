/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorButton<T = any> extends NSButton {}
  namespace classes {
    export interface MSInspectorButton<T = any> extends NSButton {
      alloc<R = MSInspectorButton>(): R;
      new: <R = MSInspectorButton>() => R;
    }
  }
}

declare const MSInspectorButton: cocoa.classes.MSInspectorButton;
