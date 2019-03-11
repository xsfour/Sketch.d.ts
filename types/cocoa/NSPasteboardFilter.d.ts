/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardFilter<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    _computeDataFromData<R = unknown, P0 = unknown>(__computeDataFromData: P0): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithFilterSpec_intype_outtype<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithFilterSpec: P0, _intype: P1, _outtype: P2): R;
    spec<R = cocoa.NSDictionary>(): R;
    outtype<R = cocoa.NSString>(): R;
    intype<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSPasteboardFilter<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPasteboardFilter>(): R;
      new: <R = NSPasteboardFilter>() => R;
      filterWithFilterSpec_intype_outtype<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_filterWithFilterSpec: P0, _intype: P1, _outtype: P2): R;
      _conversionChainFrom_to<R = unknown, P0 = unknown, P1 = unknown>(__conversionChainFrom: P0, _to: P1): R;
      _typesFilterableToType<R = unknown, P0 = unknown>(__typesFilterableToType: P0): R;
      _typesFilterableFromType<R = unknown, P0 = unknown>(__typesFilterableFromType: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSPasteboardFilter: cocoa.classes.NSPasteboardFilter;
