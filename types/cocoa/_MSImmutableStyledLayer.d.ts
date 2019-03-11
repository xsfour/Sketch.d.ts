/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyledLayer<T = any> extends cocoa.MSImmutableLayer {
    style<R = cocoa.MSImmutableStyle>(): R;
    setStyle<R = void, P0 = cocoa.MSImmutableStyle>(_v: P0): R;
    sharedStyleID<R = cocoa.NSString>(): R;
    setSharedStyleID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    hasClippingMask<R = boolean>(): R;
    setHasClippingMask<R = void, P0 = boolean>(_v: P0): R;
    clippingMaskMode<R = number>(): R;
    setClippingMaskMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyledLayer<T = any> extends cocoa.classes.MSImmutableLayer {
      alloc<R = _MSImmutableStyledLayer>(): R;
      new: <R = _MSImmutableStyledLayer>() => R;
    }
  }
}
