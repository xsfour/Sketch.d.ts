/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTogglePixelGridAction<T = any> extends MSDocumentAction {
    isActive<R = boolean>(): R;
    isShowingPixelatedView<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    togglePixelGrid<R = void, P0 = unknown>(_togglePixelGrid: P0): R;
  }
  namespace classes {
    export interface MSTogglePixelGridAction<T = any> extends MSDocumentAction {
      alloc<R = MSTogglePixelGridAction>(): R;
      new: <R = MSTogglePixelGridAction>() => R;
    }
  }
}

declare const MSTogglePixelGridAction: cocoa.classes.MSTogglePixelGridAction;
