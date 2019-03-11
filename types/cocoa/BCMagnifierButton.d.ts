/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierButton<T = any> extends cocoa.MSInspectorOnStatePushButton {
    documentColorSpace<R = unknown>(): R;
    color<R = cocoa.BCFlexibleColor>(): R;
    setColor<R = void, P0 = cocoa.BCFlexibleColor>(_v: P0): R;
    delegate<R = cocoa.BCMagnifierButtonDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.BCMagnifierButtonDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface BCMagnifierButton<T = any> extends cocoa.classes.MSInspectorOnStatePushButton {
      alloc<R = BCMagnifierButton>(): R;
      new: <R = BCMagnifierButton>() => R;
    }
  }
}

declare const BCMagnifierButton: cocoa.classes.BCMagnifierButton;
