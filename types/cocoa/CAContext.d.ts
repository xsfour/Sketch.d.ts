/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CAContext<T = any> {
    // + CAContext(NSDefaultContentsScale,NSFunctionRow,NSSuggestedContentsScale,NSVisibleRect,_NSTiledLayer):
    _NS_accumulateSuggestedScaleBelow<R = void, P0 = number>(__NS_accumulateSuggestedScaleBelow: P0): R;
    NS_defaultContentsScale<R = number>(): R;
    setNS_defaultContentsScale<R = void, P0 = number>(_v: P0): R;
    NS_visibleRect<R = cocoa.CGRect>(): R;
    setNS_visibleRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface CAContext<T = any> {
      // + CAContext(NSDefaultContentsScale,NSFunctionRow,NSSuggestedContentsScale,NSVisibleRect,_NSTiledLayer):
      functionRowContext<R = unknown>(): R;
      automaticallyNotifiesObserversOfNS_visibleRect<R = boolean>(): R;
      keyPathsForValuesAffectingNS_tiledLayerVisibleRect<R = unknown>(): R;
    }
  }
}

declare const CAContext: cocoa.classes.CAContext;
