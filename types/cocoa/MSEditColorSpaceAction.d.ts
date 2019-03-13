/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEditColorSpaceAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    editDocumentColorSpace<R = void, P0 = unknown>(_editDocumentColorSpace: P0): R;
  }
  namespace classes {
    export interface MSEditColorSpaceAction<T = any> extends MSDocumentAction {
      alloc<R = MSEditColorSpaceAction>(): R;
      new: <R = MSEditColorSpaceAction>() => R;
    }
  }
}

declare const MSEditColorSpaceAction: cocoa.classes.MSEditColorSpaceAction;
