/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorOnStatePushButton<T = any> extends cocoa.MSInspectorPushButton {
    buttonOnColorName<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorOnStatePushButton<T = any> extends cocoa.classes.MSInspectorPushButton {
      alloc<R = MSInspectorOnStatePushButton>(): R;
      new: <R = MSInspectorOnStatePushButton>() => R;
    }
  }
}

declare const MSInspectorOnStatePushButton: cocoa.classes.MSInspectorOnStatePushButton;
