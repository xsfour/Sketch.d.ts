/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeAction<T = any> extends MSDocumentAction {
    selectedListMarkers<R = unknown>(): R;
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
    marker<R = NSString>(): R;
  }
  namespace classes {
    export interface MSListTypeAction<T = any> extends MSDocumentAction {
      alloc<R = MSListTypeAction>(): R;
      new: <R = MSListTypeAction>() => R;
    }
  }
}

declare const MSListTypeAction: cocoa.classes.MSListTypeAction;
