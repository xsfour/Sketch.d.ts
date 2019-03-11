/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownController<T = any> extends cocoa.MSUpDownController {}
  namespace classes {
    export interface MSInlineUpDownController<T = any> extends cocoa.classes.MSUpDownController {
      alloc<R = MSInlineUpDownController>(): R;
      new: <R = MSInlineUpDownController>() => R;
    }
  }
}

declare const MSInlineUpDownController: cocoa.classes.MSInlineUpDownController;
