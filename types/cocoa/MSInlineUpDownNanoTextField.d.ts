/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownNanoTextField<T = any> extends MSInlineUpDownTextField {}
  namespace classes {
    export interface MSInlineUpDownNanoTextField<T = any> extends MSInlineUpDownTextField {
      alloc<R = MSInlineUpDownNanoTextField>(): R;
      new: <R = MSInlineUpDownNanoTextField>() => R;
    }
  }
}

declare const MSInlineUpDownNanoTextField: cocoa.classes.MSInlineUpDownNanoTextField;
