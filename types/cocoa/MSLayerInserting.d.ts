/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerInserting<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSLayerInserting<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSLayerInserting>(): R;
      new: <R = MSLayerInserting>() => R;
      rectForCenteringLayerWithSize_inView_selection<R = cocoa.CGRect, P0 = cocoa.CGSize, P1 = unknown, P2 = unknown>(_rectForCenteringLayerWithSize: P0, _inView: P1, _selection: P2): R;
    }
  }
}

declare const MSLayerInserting: cocoa.classes.MSLayerInserting;
