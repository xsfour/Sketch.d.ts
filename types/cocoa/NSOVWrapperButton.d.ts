/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOVWrapperButton<T = any> extends NSButton {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
  }
  namespace classes {
    export interface NSOVWrapperButton<T = any> extends NSButton {
      alloc<R = NSOVWrapperButton>(): R;
      new: <R = NSOVWrapperButton>() => R;
    }
  }
}

declare const NSOVWrapperButton: cocoa.classes.NSOVWrapperButton;
