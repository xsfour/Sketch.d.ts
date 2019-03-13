/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHWindowController<T = any> extends NSWindowController {}
  namespace classes {
    export interface CHWindowController<T = any> extends NSWindowController {
      alloc<R = CHWindowController>(): R;
      new: <R = CHWindowController>() => R;
    }
  }
}

declare const CHWindowController: cocoa.classes.CHWindowController;
