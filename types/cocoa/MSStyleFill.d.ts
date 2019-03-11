/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleFill<T = any> extends cocoa._MSStyleFill, cocoa.MSImageOwnerProtocol {
    NSImage<R = unknown>(): R;
    setOpacity<R = void, P0 = number>(_setOpacity: P0): R;
    hasOpacity<R = boolean>(): R;
    setPatternTileScale<R = void, P0 = number>(_setPatternTileScale: P0): R;
    CSSAttributeString<R = unknown>(): R;
    canReduceImageSize<R = boolean>(): R;
    targetSizeForReduction<R = cocoa.CGSize>(): R;
    interfaceOpacity<R = number>(): R;
    setInterfaceOpacity<R = void, P0 = number>(_v: P0): R;
    image<R = cocoa.MSImageData>(): R;
    setImage<R = void, P0 = cocoa.MSImageData>(_v: P0): R;
  }
  namespace classes {
    export interface MSStyleFill<T = any> extends cocoa.classes._MSStyleFill, cocoa.classes.MSImageOwnerProtocol {
      alloc<R = MSStyleFill>(): R;
      new: <R = MSStyleFill>() => R;
      keyPathsForValuesAffectingInterfaceOpacity<R = unknown>(): R;
    }
  }
}

declare const MSStyleFill: cocoa.classes.MSStyleFill;
