/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberLayoutAttributes<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    _layoutAttributesByBlendingFraction_ofAttributes<R = unknown, P0 = number, P1 = unknown>(__layoutAttributesByBlendingFraction: P0, _ofAttributes: P1): R;
    setEscapesFromScrollView<R = void, P0 = boolean>(_setEscapesFromScrollView: P0): R;
    escapesFromScrollView<R = boolean>(): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    alpha<R = number>(): R;
    setAlpha<R = void, P0 = number>(_v: P0): R;
    frame<R = cocoa.CGRect>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    itemIndex<R = number>(): R;
    setItemIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberLayoutAttributes<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSScrubberLayoutAttributes>(): R;
      new: <R = NSScrubberLayoutAttributes>() => R;
      layoutAttributesForItemAtIndex<R = unknown, P0 = number>(_layoutAttributesForItemAtIndex: P0): R;
    }
  }
}

declare const NSScrubberLayoutAttributes: cocoa.classes.NSScrubberLayoutAttributes;
