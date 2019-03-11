/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSThemeFullScreenButtonCell<T = any> extends cocoa.NSButtonCell {
    _themeImageState<R = number>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSThemeFullScreenButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = _NSThemeFullScreenButtonCell>(): R;
      new: <R = _NSThemeFullScreenButtonCell>() => R;
    }
  }
}
