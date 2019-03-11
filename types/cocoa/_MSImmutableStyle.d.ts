/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyle<T = any> extends cocoa.MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    textStyle<R = cocoa.MSImmutableTextStyle>(): R;
    setTextStyle<R = void, P0 = cocoa.MSImmutableTextStyle>(_v: P0): R;
    shadows<R = cocoa.NSArray>(): R;
    setShadows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    innerShadows<R = cocoa.NSArray>(): R;
    setInnerShadows<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    fills<R = cocoa.NSArray>(): R;
    setFills<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    contextSettings<R = cocoa.MSImmutableGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = cocoa.MSImmutableGraphicsContextSettings>(_v: P0): R;
    colorControls<R = cocoa.MSImmutableStyleColorControls>(): R;
    setColorControls<R = void, P0 = cocoa.MSImmutableStyleColorControls>(_v: P0): R;
    borders<R = cocoa.NSArray>(): R;
    setBorders<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    borderOptions<R = cocoa.MSImmutableStyleBorderOptions>(): R;
    setBorderOptions<R = void, P0 = cocoa.MSImmutableStyleBorderOptions>(_v: P0): R;
    blur<R = cocoa.MSImmutableStyleBlur>(): R;
    setBlur<R = void, P0 = cocoa.MSImmutableStyleBlur>(_v: P0): R;
    windingRule<R = number>(): R;
    setWindingRule<R = void, P0 = number>(_v: P0): R;
    startMarkerType<R = number>(): R;
    setStartMarkerType<R = void, P0 = number>(_v: P0): R;
    miterLimit<R = number>(): R;
    setMiterLimit<R = void, P0 = number>(_v: P0): R;
    endMarkerType<R = number>(): R;
    setEndMarkerType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableStyle<T = any> extends cocoa.classes.MSImmutableModelObject {
      alloc<R = _MSImmutableStyle>(): R;
      new: <R = _MSImmutableStyle>() => R;
    }
  }
}
