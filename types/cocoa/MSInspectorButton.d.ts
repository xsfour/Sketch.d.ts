/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorButton<T = any> extends cocoa.NSButton {}
  namespace classes {
    export interface MSInspectorButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = MSInspectorButton>(): R;
      new: <R = MSInspectorButton>() => R;
    }
  }
}

declare const MSInspectorButton: cocoa.classes.MSInspectorButton;
