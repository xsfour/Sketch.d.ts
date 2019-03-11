/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMaskWithShapeAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    maskWithShape<R = void, P0 = unknown>(_maskWithShape: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSMaskWithShapeAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSMaskWithShapeAction>(): R;
      new: <R = MSMaskWithShapeAction>() => R;
    }
  }
}

declare const MSMaskWithShapeAction: cocoa.classes.MSMaskWithShapeAction;
