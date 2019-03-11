/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownNanoTextField<T = any> extends cocoa.MSInlineUpDownTextField {}
  namespace classes {
    export interface MSInlineUpDownNanoTextField<T = any> extends cocoa.classes.MSInlineUpDownTextField {
      alloc<R = MSInlineUpDownNanoTextField>(): R;
      new: <R = MSInlineUpDownNanoTextField>() => R;
    }
  }
}

declare const MSInlineUpDownNanoTextField: cocoa.classes.MSInlineUpDownNanoTextField;
