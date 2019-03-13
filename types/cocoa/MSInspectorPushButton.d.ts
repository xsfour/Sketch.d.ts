/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPushButton<T = any> extends MSInspectorButton {
    cxx_destruct<R = void>(): R;
    buttonOnColorName<R = NSString>(): R;
    setButtonOnColorName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorPushButton<T = any> extends MSInspectorButton {
      alloc<R = MSInspectorPushButton>(): R;
      new: <R = MSInspectorPushButton>() => R;
    }
  }
}

declare const MSInspectorPushButton: cocoa.classes.MSInspectorPushButton;
