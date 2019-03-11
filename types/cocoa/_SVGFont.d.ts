/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGFont<T = any> extends cocoa.SVGElement {
    primitiveRemoveUsedByObject<R = void, P0 = unknown>(_primitiveRemoveUsedByObject: P0): R;
    primitiveAddUsedByObject<R = void, P0 = unknown>(_primitiveAddUsedByObject: P0): R;
    removeUsedByObject<R = void, P0 = unknown>(_removeUsedByObject: P0): R;
    addUsedByObject<R = void, P0 = unknown>(_addUsedByObject: P0): R;
    weight<R = number>(): R;
    setWeight<R = void, P0 = number>(_v: P0): R;
    variant<R = cocoa.NSString>(): R;
    setVariant<R = void, P0 = cocoa.NSString>(_v: P0): R;
    style<R = cocoa.NSString>(): R;
    setStyle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    size<R = number>(): R;
    setSize<R = void, P0 = number>(_v: P0): R;
    family<R = cocoa.NSString>(): R;
    setFamily<R = void, P0 = cocoa.NSString>(_v: P0): R;
    usedBy<R = cocoa.NSSet>(): R;
    setUsedBy<R = void, P0 = cocoa.NSSet>(_v: P0): R;
  }
  namespace classes {
    export interface _SVGFont<T = any> extends cocoa.classes.SVGElement {
      alloc<R = _SVGFont>(): R;
      new: <R = _SVGFont>() => R;
    }
  }
}
