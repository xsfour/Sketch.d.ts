/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGFill<T = any> extends cocoa.SVGElement {
    primitiveRemoveUsedByObject<R = void, P0 = unknown>(_primitiveRemoveUsedByObject: P0): R;
    primitiveAddUsedByObject<R = void, P0 = unknown>(_primitiveAddUsedByObject: P0): R;
    removeUsedByObject<R = void, P0 = unknown>(_removeUsedByObject: P0): R;
    addUsedByObject<R = void, P0 = unknown>(_addUsedByObject: P0): R;
    primitiveSetPattern<R = void, P0 = unknown>(_primitiveSetPattern: P0): R;
    primitiveSetGradient<R = void, P0 = unknown>(_primitiveSetGradient: P0): R;
    windingrule<R = cocoa.NSString>(): R;
    setWindingrule<R = void, P0 = cocoa.NSString>(_v: P0): R;
    opacity<R = number>(): R;
    setOpacity<R = void, P0 = number>(_v: P0): R;
    color<R = cocoa.MSImmutableColor>(): R;
    setColor<R = void, P0 = cocoa.MSImmutableColor>(_v: P0): R;
    usedBy<R = cocoa.NSSet>(): R;
    setUsedBy<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    pattern<R = cocoa.SVGPattern>(): R;
    setPattern<R = void, P0 = cocoa.SVGPattern>(_v: P0): R;
    gradient<R = cocoa.SVGGradient>(): R;
    setGradient<R = void, P0 = cocoa.SVGGradient>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGFill<T = any> extends cocoa.classes.SVGElement {
      alloc<R = _SVGFill>(): R;
      new: <R = _SVGFill>() => R;
    }
  }
}
