/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPushButton<T = any> extends cocoa.MSInspectorButton {
    cxx_destruct<R = void>(): R;
    buttonOnColorName<R = cocoa.NSString>(): R;
    setButtonOnColorName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSInspectorPushButton<T = any> extends cocoa.classes.MSInspectorButton {
      alloc<R = MSInspectorPushButton>(): R;
      new: <R = MSInspectorPushButton>() => R;
    }
  }
}

declare const MSInspectorPushButton: cocoa.classes.MSInspectorPushButton;
