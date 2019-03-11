/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorSpaceConverter<T = any> extends cocoa.NSObject, cocoa.MSColorConverterProtocol {
    cxx_destruct<R = void>(): R;
    initForConversionFromColorSpace_to<R = unknown, P0 = number, P1 = number>(_initForConversionFromColorSpace: P0, _to: P1): R;
    targetNSColorSpace<R = cocoa.NSColorSpace>(): R;
    oldNSColorSpace<R = cocoa.NSColorSpace>(): R;
    targetColorSpace<R = number>(): R;
    oldColorSpace<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorSpaceConverter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSColorConverterProtocol {
      alloc<R = MSColorSpaceConverter>(): R;
      new: <R = MSColorSpaceConverter>() => R;
    }
  }
}

declare const MSColorSpaceConverter: cocoa.classes.MSColorSpaceConverter;
