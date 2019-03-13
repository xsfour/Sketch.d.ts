/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAutoSelectingArrayController<T = any> extends NSArrayController {}
  namespace classes {
    export interface MSAutoSelectingArrayController<T = any> extends NSArrayController {
      alloc<R = MSAutoSelectingArrayController>(): R;
      new: <R = MSAutoSelectingArrayController>() => R;
    }
  }
}

declare const MSAutoSelectingArrayController: cocoa.classes.MSAutoSelectingArrayController;
