/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeFullScreenButton<T = any> extends NSButton {}
  namespace classes {
    export interface _NSThemeFullScreenButton<T = any> extends NSButton {
      alloc<R = _NSThemeFullScreenButton>(): R;
      new: <R = _NSThemeFullScreenButton>() => R;
    }
  }
}
