/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBackingLayerContents<T = any> extends cocoa.NSObject, cocoa.CALayerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    NS_hasPartialPrefetchedContentsForRect<R = boolean, P0 = cocoa.CGRect>(_NS_hasPartialPrefetchedContentsForRect: P0): R;
    NS_hasPrefetchedContentsForRect<R = boolean, P0 = cocoa.CGRect>(_NS_hasPrefetchedContentsForRect: P0): R;
    NS_activeVisibleRect<R = cocoa.CGRect>(): R;
    CA_copyRenderValue<R = void>(): R;
    CA_prepareRenderValue<R = void>(): R;
    NS_canDrawLayer<R = boolean, P0 = unknown>(_NS_canDrawLayer: P0): R;
    display<R = void>(): R;
    invalidateRect<R = void, P0 = cocoa.CGRect>(_invalidateRect: P0): R;
    update<R = void>(): R;
    tileClass<R = unknown>(): R;
    dealloc<R = void>(): R;
    backingLayer<R = cocoa.CALayer>(): R;
    setBackingLayer<R = void, P0 = cocoa.CALayer>(_v: P0): R;
    contentLayer<R = cocoa.CALayer>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSBackingLayerContents<T = any> extends cocoa.classes.NSObject, cocoa.classes.CALayerDelegateProtocol {
      alloc<R = _NSBackingLayerContents>(): R;
      new: <R = _NSBackingLayerContents>() => R;
    }
  }
}
