/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownController<T = any> extends MSUpDownController {}
  namespace classes {
    export interface MSInlineUpDownController<T = any> extends MSUpDownController {
      alloc<R = MSInlineUpDownController>(): R;
      new: <R = MSInlineUpDownController>() => R;
    }
  }
}

declare const MSInlineUpDownController: cocoa.classes.MSInlineUpDownController;
