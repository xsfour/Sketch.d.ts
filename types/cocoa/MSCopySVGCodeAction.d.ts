/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCopySVGCodeAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    shouldIncludeBackgroundColorFromLayers<R = boolean, P0 = unknown>(_shouldIncludeBackgroundColorFromLayers: P0): R;
    validate<R = boolean>(): R;
    copySVG<R = void, P0 = unknown>(_copySVG: P0): R;
  }
  namespace classes {
    export interface MSCopySVGCodeAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSCopySVGCodeAction>(): R;
      new: <R = MSCopySVGCodeAction>() => R;
    }
  }
}

declare const MSCopySVGCodeAction: cocoa.classes.MSCopySVGCodeAction;
