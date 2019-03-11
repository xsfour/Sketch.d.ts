/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeFullScreenButton<T = any> extends cocoa.NSButton {}
  namespace classes {
    export interface _NSThemeFullScreenButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = _NSThemeFullScreenButton>(): R;
      new: <R = _NSThemeFullScreenButton>() => R;
    }
  }
}
