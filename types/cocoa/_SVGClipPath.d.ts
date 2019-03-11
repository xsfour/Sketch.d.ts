/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGClipPath<T = any> extends cocoa.SVGGroupElement {
    primitiveRemoveClippingObject<R = void, P0 = unknown>(_primitiveRemoveClippingObject: P0): R;
    primitiveAddClippingObject<R = void, P0 = unknown>(_primitiveAddClippingObject: P0): R;
    removeClippingObject<R = void, P0 = unknown>(_removeClippingObject: P0): R;
    addClippingObject<R = void, P0 = unknown>(_addClippingObject: P0): R;
    clipping<R = cocoa.NSSet>(): R;
    setClipping<R = void, P0 = cocoa.NSSet>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGClipPath<T = any> extends cocoa.classes.SVGGroupElement {
      alloc<R = _SVGClipPath>(): R;
      new: <R = _SVGClipPath>() => R;
    }
  }
}
