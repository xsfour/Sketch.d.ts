/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextOnPathAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    textLayers<R = unknown>(): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
    textOnPath<R = void, P0 = unknown>(_textOnPath: P0): R;
  }
  namespace classes {
    export interface MSTextOnPathAction<T = any> extends MSDocumentAction {
      alloc<R = MSTextOnPathAction>(): R;
      new: <R = MSTextOnPathAction>() => R;
    }
  }
}

declare const MSTextOnPathAction: cocoa.classes.MSTextOnPathAction;
