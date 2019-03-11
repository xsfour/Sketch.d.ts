/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEventHandlerAction<T = any> extends cocoa.MSDocumentAction {
    isSelectable<R = boolean>(): R;
    eventHandlerKey<R = unknown>(): R;
    eventHandlerClass<R = unknown>(): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
  }
  namespace classes {
    export interface MSEventHandlerAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSEventHandlerAction>(): R;
      new: <R = MSEventHandlerAction>() => R;
    }
  }
}

declare const MSEventHandlerAction: cocoa.classes.MSEventHandlerAction;
