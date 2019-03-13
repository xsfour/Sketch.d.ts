/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorSpaceConverter<T = any> extends NSObject, MSColorConverterProtocol {
    cxx_destruct<R = void>(): R;
    initForConversionFromColorSpace_to<R = unknown, P0 = number, P1 = number>(_initForConversionFromColorSpace: P0, _to: P1): R;
    targetNSColorSpace<R = NSColorSpace>(): R;
    oldNSColorSpace<R = NSColorSpace>(): R;
    targetColorSpace<R = number>(): R;
    oldColorSpace<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorSpaceConverter<T = any> extends NSObject, MSColorConverterProtocol {
      alloc<R = MSColorSpaceConverter>(): R;
      new: <R = MSColorSpaceConverter>() => R;
    }
  }
}

declare const MSColorSpaceConverter: cocoa.classes.MSColorSpaceConverter;
