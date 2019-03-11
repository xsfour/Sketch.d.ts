/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHWindowController<T = any> extends cocoa.NSWindowController {}
  namespace classes {
    export interface CHWindowController<T = any> extends cocoa.classes.NSWindowController {
      alloc<R = CHWindowController>(): R;
      new: <R = CHWindowController>() => R;
    }
  }
}

declare const CHWindowController: cocoa.classes.CHWindowController;
