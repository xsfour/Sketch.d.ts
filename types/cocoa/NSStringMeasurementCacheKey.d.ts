/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStringMeasurementCacheKey<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    setAttributedString_size_options_maximumNumberOfLines_appearance<R = void, P0 = unknown, P1 = cocoa.CGSize, P2 = number, P3 = number, P4 = unknown>(_setAttributedString: P0, _size: P1, _options: P2, _maximumNumberOfLines: P3, _appearance: P4): R;
  }
  namespace classes {
    export interface NSStringMeasurementCacheKey<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSStringMeasurementCacheKey>(): R;
      new: <R = NSStringMeasurementCacheKey>() => R;
    }
  }
}

declare const NSStringMeasurementCacheKey: cocoa.classes.NSStringMeasurementCacheKey;
