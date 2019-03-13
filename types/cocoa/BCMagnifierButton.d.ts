/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierButton<T = any> extends MSInspectorOnStatePushButton {
    documentColorSpace<R = unknown>(): R;
    color<R = BCFlexibleColor>(): R;
    setColor<R = void, P0 = BCFlexibleColor>(_v: P0): R;
    delegate<R = BCMagnifierButtonDelegate>(): R;
    setDelegate<R = void, P0 = BCMagnifierButtonDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface BCMagnifierButton<T = any> extends MSInspectorOnStatePushButton {
      alloc<R = BCMagnifierButton>(): R;
      new: <R = BCMagnifierButton>() => R;
    }
  }
}

declare const BCMagnifierButton: cocoa.classes.BCMagnifierButton;
