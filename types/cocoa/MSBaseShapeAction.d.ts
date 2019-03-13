/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseShapeAction<T = any> extends MSBaseInsertAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    insertShape<R = unknown, P0 = unknown>(_insertShape: P0): R;
    prototypeLayer<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    recipeName<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBaseShapeAction<T = any> extends MSBaseInsertAction {
      alloc<R = MSBaseShapeAction>(): R;
      new: <R = MSBaseShapeAction>() => R;
      insertShapeLayer_identifier_document<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_insertShapeLayer: P0, _identifier: P1, _document: P2): R;
    }
  }
}

declare const MSBaseShapeAction: cocoa.classes.MSBaseShapeAction;
