/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragLayerGestureRecognizer<T = any> extends cocoa.MSDragToMoveOrCopyGestureRecognizer {
    shouldSnap<R = boolean>(): R;
  }
  namespace classes {
    export interface MSDragLayerGestureRecognizer<T = any> extends cocoa.classes.MSDragToMoveOrCopyGestureRecognizer {
      alloc<R = MSDragLayerGestureRecognizer>(): R;
      new: <R = MSDragLayerGestureRecognizer>() => R;
    }
  }
}

declare const MSDragLayerGestureRecognizer: cocoa.classes.MSDragLayerGestureRecognizer;
