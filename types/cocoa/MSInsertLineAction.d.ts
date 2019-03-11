/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertLineAction<T = any> extends cocoa.MSBaseInsertAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    eventHandlerClass<R = unknown>(): R;
    lineShapeFrom_to<R = unknown, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint>(_lineShapeFrom: P0, _to: P1): R;
    insertLine<R = void, P0 = unknown>(_insertLine: P0): R;
  }
  namespace classes {
    export interface MSInsertLineAction<T = any> extends cocoa.classes.MSBaseInsertAction {
      alloc<R = MSInsertLineAction>(): R;
      new: <R = MSInsertLineAction>() => R;
    }
  }
}

declare const MSInsertLineAction: cocoa.classes.MSInsertLineAction;
