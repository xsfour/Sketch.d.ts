/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownMiniTextField<T = any> extends cocoa.MSInlineUpDownTextField {}
  namespace classes {
    export interface MSInlineUpDownMiniTextField<T = any> extends cocoa.classes.MSInlineUpDownTextField {
      alloc<R = MSInlineUpDownMiniTextField>(): R;
      new: <R = MSInlineUpDownMiniTextField>() => R;
    }
  }
}

declare const MSInlineUpDownMiniTextField: cocoa.classes.MSInlineUpDownMiniTextField;
