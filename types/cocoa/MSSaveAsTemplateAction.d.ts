/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSaveAsTemplateAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    saveAsTemplate<R = void, P0 = unknown>(_saveAsTemplate: P0): R;
  }
  namespace classes {
    export interface MSSaveAsTemplateAction<T = any> extends MSDocumentAction {
      alloc<R = MSSaveAsTemplateAction>(): R;
      new: <R = MSSaveAsTemplateAction>() => R;
    }
  }
}

declare const MSSaveAsTemplateAction: cocoa.classes.MSSaveAsTemplateAction;
