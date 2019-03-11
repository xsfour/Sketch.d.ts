/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGDrawableElement<T = any> extends cocoa.SVGElement {
    primitiveSetStroke<R = void, P0 = unknown>(_primitiveSetStroke: P0): R;
    primitiveSetMask<R = void, P0 = unknown>(_primitiveSetMask: P0): R;
    primitiveSetFont<R = void, P0 = unknown>(_primitiveSetFont: P0): R;
    primitiveSetFill<R = void, P0 = unknown>(_primitiveSetFill: P0): R;
    primitiveSetClip<R = void, P0 = unknown>(_primitiveSetClip: P0): R;
    transform<R = cocoa.NSAffineTransform>(): R;
    setTransform<R = void, P0 = cocoa.NSAffineTransform>(_v: P0): R;
    rect<R = cocoa.CGRect>(): R;
    setRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    opacity<R = number>(): R;
    setOpacity<R = void, P0 = number>(_v: P0): R;
    hidden<R = boolean>(): R;
    setHidden<R = void, P0 = boolean>(_v: P0): R;
    clips<R = boolean>(): R;
    setClips<R = void, P0 = boolean>(_v: P0): R;
    blendMode<R = cocoa.NSString>(): R;
    setBlendMode<R = void, P0 = cocoa.NSString>(_v: P0): R;
    stroke<R = cocoa.SVGStroke>(): R;
    setStroke<R = void, P0 = cocoa.SVGStroke>(_v: P0): R;
    mask<R = cocoa.SVGMask>(): R;
    setMask<R = void, P0 = cocoa.SVGMask>(_v: P0): R;
    font<R = cocoa.SVGFont>(): R;
    setFont<R = void, P0 = cocoa.SVGFont>(_v: P0): R;
    fill<R = cocoa.SVGFill>(): R;
    setFill<R = void, P0 = cocoa.SVGFill>(_v: P0): R;
    clip<R = cocoa.SVGClipPath>(): R;
    setClip<R = void, P0 = cocoa.SVGClipPath>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGDrawableElement<T = any> extends cocoa.classes.SVGElement {
      alloc<R = _SVGDrawableElement>(): R;
      new: <R = _SVGDrawableElement>() => R;
    }
  }
}
