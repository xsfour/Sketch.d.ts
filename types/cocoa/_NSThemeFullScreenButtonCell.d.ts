/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeFullScreenButtonCell<T = any> extends NSButtonCell {
    _themeImageState<R = number>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSThemeFullScreenButtonCell<T = any> extends NSButtonCell {
      alloc<R = _NSThemeFullScreenButtonCell>(): R;
      new: <R = _NSThemeFullScreenButtonCell>() => R;
    }
  }
}
