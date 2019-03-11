/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTiledLayerContents<T = any> extends cocoa.NSObject, cocoa.CALayerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    CA_copyRenderValue<R = void>(): R;
    CA_prepareRenderValue<R = void>(): R;
    NS_canDrawLayer<R = boolean, P0 = unknown>(_NS_canDrawLayer: P0): R;
    updateContentsScaleSize<R = void, P0 = cocoa.CGSize>(_updateContentsScaleSize: P0): R;
    updateContentsScale<R = void, P0 = number>(_updateContentsScale: P0): R;
    update_shouldCallPrepareContent<R = void, P0 = boolean, P1 = boolean>(_update: P0, _shouldCallPrepareContent: P1): R;
    invalidateRect<R = void, P0 = cocoa.CGRect>(_invalidateRect: P0): R;
    prefetchContentsInRect_scrollVelocity<R = boolean, P0 = cocoa.CGRect, P1 = cocoa.CGPoint>(_prefetchContentsInRect: P0, _scrollVelocity: P1): R;
    renderedRectInRect_scrollVelocity<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = cocoa.CGPoint>(_renderedRectInRect: P0, _scrollVelocity: P1): R;
    _findRenderedRectStartingAtRect_scrollVelocity<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = cocoa.CGPoint>(__findRenderedRectStartingAtRect: P0, _scrollVelocity: P1): R;
    _findFirstValidRectStartingAtRect_scrollVelocity<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = cocoa.CGPoint>(__findFirstValidRectStartingAtRect: P0, _scrollVelocity: P1): R;
    setPreparedContentRect<R = void, P0 = cocoa.CGRect>(_setPreparedContentRect: P0): R;
    addAllTilesWithNonPurgedContents<R = void>(): R;
    purgeExcessTileContents<R = void>(): R;
    _removeNonVisibleTiles<R = void>(): R;
    _performWorkOnTilesOutwardFromRect_scrollVelocity_handler<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGPoint, P2 = cocoa.CDUnknownBlockType>(__performWorkOnTilesOutwardFromRect: P0, _scrollVelocity: P1, _handler: P2): R;
    _performWorkOnTilesFromVisibleAreaOutward_scrollVelocity<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CGPoint>(__performWorkOnTilesFromVisibleAreaOutward: P0, _scrollVelocity: P1): R;
    dealloc<R = void>(): R;
    presentationRect<R = cocoa.CGRect>(): R;
    tileSize<R = cocoa.CGSize>(): R;
    coverageRect<R = cocoa.CGRect>(): R;
    activeRect<R = cocoa.CGRect>(): R;
    tiledLayer<R = cocoa._NSTiledLayer>(): R;
    setTiledLayer<R = void, P0 = cocoa._NSTiledLayer>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTiledLayerContents<T = any> extends cocoa.classes.NSObject, cocoa.classes.CALayerDelegateProtocol {
      alloc<R = _NSTiledLayerContents>(): R;
      new: <R = _NSTiledLayerContents>() => R;
    }
  }
}
