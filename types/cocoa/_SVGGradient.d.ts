/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGGradient<T = any> extends cocoa.SVGElement {
    primitiveRemoveUsedByStrokesObject<R = void, P0 = unknown>(_primitiveRemoveUsedByStrokesObject: P0): R;
    primitiveAddUsedByStrokesObject<R = void, P0 = unknown>(_primitiveAddUsedByStrokesObject: P0): R;
    removeUsedByStrokesObject<R = void, P0 = unknown>(_removeUsedByStrokesObject: P0): R;
    addUsedByStrokesObject<R = void, P0 = unknown>(_addUsedByStrokesObject: P0): R;
    primitiveRemoveUsedByFillsObject<R = void, P0 = unknown>(_primitiveRemoveUsedByFillsObject: P0): R;
    primitiveAddUsedByFillsObject<R = void, P0 = unknown>(_primitiveAddUsedByFillsObject: P0): R;
    removeUsedByFillsObject<R = void, P0 = unknown>(_removeUsedByFillsObject: P0): R;
    addUsedByFillsObject<R = void, P0 = unknown>(_addUsedByFillsObject: P0): R;
    primitiveSetLinkedTo<R = void, P0 = unknown>(_primitiveSetLinkedTo: P0): R;
    primitiveRemoveLinkedFromObject<R = void, P0 = unknown>(_primitiveRemoveLinkedFromObject: P0): R;
    primitiveAddLinkedFromObject<R = void, P0 = unknown>(_primitiveAddLinkedFromObject: P0): R;
    removeLinkedFromObject<R = void, P0 = unknown>(_removeLinkedFromObject: P0): R;
    addLinkedFromObject<R = void, P0 = unknown>(_addLinkedFromObject: P0): R;
    transform<R = cocoa.NSAffineTransform>(): R;
    setTransform<R = void, P0 = cocoa.NSAffineTransform>(_v: P0): R;
    toY<R = number>(): R;
    setToY<R = void, P0 = number>(_v: P0): R;
    toX<R = number>(): R;
    setToX<R = void, P0 = number>(_v: P0): R;
    radial<R = boolean>(): R;
    setRadial<R = void, P0 = boolean>(_v: P0): R;
    fromY<R = number>(): R;
    setFromY<R = void, P0 = number>(_v: P0): R;
    fromX<R = number>(): R;
    setFromX<R = void, P0 = number>(_v: P0): R;
    usedByStrokes<R = cocoa.NSSet>(): R;
    setUsedByStrokes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    usedByFills<R = cocoa.NSSet>(): R;
    setUsedByFills<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    linkedTo<R = cocoa.SVGGradient>(): R;
    setLinkedTo<R = void, P0 = cocoa.SVGGradient>(_v: P0): R;
    linkedFrom<R = cocoa.NSSet>(): R;
    setLinkedFrom<R = void, P0 = cocoa.NSSet>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGGradient<T = any> extends cocoa.classes.SVGElement {
      alloc<R = _SVGGradient>(): R;
      new: <R = _SVGGradient>() => R;
    }
  }
}
