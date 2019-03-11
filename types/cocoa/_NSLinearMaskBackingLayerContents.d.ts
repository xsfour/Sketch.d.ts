/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLinearMaskBackingLayerContents<T = any> extends cocoa._NSBackingLayerContents {
    NS_tiledLayer_drawTile_inContext<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGContext>(_NS_tiledLayer: P0, _drawTile: P1, _inContext: P2): R;
  }
  namespace classes {
    export interface _NSLinearMaskBackingLayerContents<T = any> extends cocoa.classes._NSBackingLayerContents {
      alloc<R = _NSLinearMaskBackingLayerContents>(): R;
      new: <R = _NSLinearMaskBackingLayerContents>() => R;
    }
  }
}
