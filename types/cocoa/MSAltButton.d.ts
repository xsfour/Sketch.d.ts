/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAltButton<T = any> extends MSHoverButton {
    cxx_destruct<R = void>(): R;
    flagsChangedNotification<R = void, P0 = unknown>(_flagsChangedNotification: P0): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    bc_weakTarget<R = unknown>(): R;
    setBc_weakTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface MSAltButton<T = any> extends MSHoverButton {
      alloc<R = MSAltButton>(): R;
      new: <R = MSAltButton>() => R;
    }
  }
}

declare const MSAltButton: cocoa.classes.MSAltButton;
