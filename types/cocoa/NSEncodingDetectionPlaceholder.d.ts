/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEncodingDetectionPlaceholder<T = any> extends NSObject {
    debugDescription<R = unknown>(): R;
    dealloc<R = void>(): R;
    bytesLength<R = number>(): R;
    bytes<R = string>(): R;
    string<R = NSString>(): R;
    cfEncoding<R = number>(): R;
    nsEncoding<R = number>(): R;
  }
  namespace classes {
    export interface NSEncodingDetectionPlaceholder<T = any> extends NSObject {
      alloc<R = NSEncodingDetectionPlaceholder>(): R;
      new: <R = NSEncodingDetectionPlaceholder>() => R;
      placeholderForDetector<R = unknown, P0 = unknown>(_placeholderForDetector: P0): R;
    }
  }
}

declare const NSEncodingDetectionPlaceholder: cocoa.classes.NSEncodingDetectionPlaceholder;
