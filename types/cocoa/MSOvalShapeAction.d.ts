/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOvalShapeAction<T = any> extends cocoa.MSBaseShapeAction {
    ovalShape<R = void, P0 = unknown>(_ovalShape: P0): R;
  }
  namespace classes {
    export interface MSOvalShapeAction<T = any> extends cocoa.classes.MSBaseShapeAction {
      alloc<R = MSOvalShapeAction>(): R;
      new: <R = MSOvalShapeAction>() => R;
    }
  }
}

declare const MSOvalShapeAction: cocoa.classes.MSOvalShapeAction;
