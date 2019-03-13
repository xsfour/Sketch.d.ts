/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTiledLayerContents<T = any> extends NSObject, CALayerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    CA_copyRenderValue<R = void>(): R;
    CA_prepareRenderValue<R = void>(): R;
    NS_canDrawLayer<R = boolean, P0 = unknown>(_NS_canDrawLayer: P0): R;
    updateContentsScaleSize<R = void, P0 = CGSize>(_updateContentsScaleSize: P0): R;
    updateContentsScale<R = void, P0 = number>(_updateContentsScale: P0): R;
    update_shouldCallPrepareContent<R = void, P0 = boolean, P1 = boolean>(_update: P0, _shouldCallPrepareContent: P1): R;
    invalidateRect<R = void, P0 = CGRect>(_invalidateRect: P0): R;
    prefetchContentsInRect_scrollVelocity<R = boolean, P0 = CGRect, P1 = CGPoint>(_prefetchContentsInRect: P0, _scrollVelocity: P1): R;
    renderedRectInRect_scrollVelocity<R = CGRect, P0 = CGRect, P1 = CGPoint>(_renderedRectInRect: P0, _scrollVelocity: P1): R;
    _findRenderedRectStartingAtRect_scrollVelocity<R = CGRect, P0 = CGRect, P1 = CGPoint>(__findRenderedRectStartingAtRect: P0, _scrollVelocity: P1): R;
    _findFirstValidRectStartingAtRect_scrollVelocity<R = CGRect, P0 = CGRect, P1 = CGPoint>(__findFirstValidRectStartingAtRect: P0, _scrollVelocity: P1): R;
    setPreparedContentRect<R = void, P0 = CGRect>(_setPreparedContentRect: P0): R;
    addAllTilesWithNonPurgedContents<R = void>(): R;
    purgeExcessTileContents<R = void>(): R;
    _removeNonVisibleTiles<R = void>(): R;
    _performWorkOnTilesOutwardFromRect_scrollVelocity_handler<R = void, P0 = CGRect, P1 = CGPoint, P2 = CDUnknownBlockType>(__performWorkOnTilesOutwardFromRect: P0, _scrollVelocity: P1, _handler: P2): R;
    _performWorkOnTilesFromVisibleAreaOutward_scrollVelocity<R = void, P0 = CDUnknownBlockType, P1 = CGPoint>(__performWorkOnTilesFromVisibleAreaOutward: P0, _scrollVelocity: P1): R;
    dealloc<R = void>(): R;
    presentationRect<R = CGRect>(): R;
    tileSize<R = CGSize>(): R;
    coverageRect<R = CGRect>(): R;
    activeRect<R = CGRect>(): R;
    tiledLayer<R = _NSTiledLayer>(): R;
    setTiledLayer<R = void, P0 = _NSTiledLayer>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTiledLayerContents<T = any> extends NSObject, CALayerDelegateProtocol {
      alloc<R = _NSTiledLayerContents>(): R;
      new: <R = _NSTiledLayerContents>() => R;
    }
  }
}
