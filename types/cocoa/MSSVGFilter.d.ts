/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGFilter<T = any> extends cocoa.MSXMLElementWrapper {
    close<R = void>(): R;
    addFilterOutput<R = void, P0 = unknown>(_addFilterOutput: P0): R;
    addFilterItem<R = void, P0 = unknown>(_addFilterItem: P0): R;
    dealloc<R = void>(): R;
    finalMerge<R = cocoa.MSSVGMerge>(): R;
    setFinalMerge<R = void, P0 = cocoa.MSSVGMerge>(_v: P0): R;
    href<R = cocoa.NSString>(): R;
    setHref<R = void, P0 = cocoa.NSString>(_v: P0): R;
    filterRes<R = cocoa.NSString>(): R;
    setFilterRes<R = void, P0 = cocoa.NSString>(_v: P0): R;
    filterUnits<R = cocoa.NSString>(): R;
    setFilterUnits<R = void, P0 = cocoa.NSString>(_v: P0): R;
    height<R = cocoa.NSString>(): R;
    setHeight<R = void, P0 = cocoa.NSString>(_v: P0): R;
    primitiveUnits<R = cocoa.NSString>(): R;
    setPrimitiveUnits<R = void, P0 = cocoa.NSString>(_v: P0): R;
    width<R = cocoa.NSString>(): R;
    setWidth<R = void, P0 = cocoa.NSString>(_v: P0): R;
    x<R = cocoa.NSString>(): R;
    setX<R = void, P0 = cocoa.NSString>(_v: P0): R;
    y<R = cocoa.NSString>(): R;
    setY<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGFilter<T = any> extends cocoa.classes.MSXMLElementWrapper {
      alloc<R = MSSVGFilter>(): R;
      new: <R = MSSVGFilter>() => R;
      filter<R = unknown>(): R;
    }
  }
}

declare const MSSVGFilter: cocoa.classes.MSSVGFilter;
