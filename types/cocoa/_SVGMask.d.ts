/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGMask<T = any> extends cocoa.SVGGroupElement {
    primitiveRemoveMaskingObject<R = void, P0 = unknown>(_primitiveRemoveMaskingObject: P0): R;
    primitiveAddMaskingObject<R = void, P0 = unknown>(_primitiveAddMaskingObject: P0): R;
    removeMaskingObject<R = void, P0 = unknown>(_removeMaskingObject: P0): R;
    addMaskingObject<R = void, P0 = unknown>(_addMaskingObject: P0): R;
    masking<R = cocoa.NSSet>(): R;
    setMasking<R = void, P0 = cocoa.NSSet>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGMask<T = any> extends cocoa.classes.SVGGroupElement {
      alloc<R = _SVGMask>(): R;
      new: <R = _SVGMask>() => R;
    }
  }
}
