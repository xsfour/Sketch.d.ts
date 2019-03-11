/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAttributeConverter<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    convertAttributes<R = unknown, P0 = unknown>(_convertAttributes: P0): R;
    initWithAttributeName_block<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithAttributeName: P0, _block: P1): R;
    conversionBlock<R = cocoa.CDUnknownBlockType>(): R;
    attributeName<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSAttributeConverter<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSAttributeConverter>(): R;
      new: <R = MSAttributeConverter>() => R;
      converterWithAttributeName_block<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_converterWithAttributeName: P0, _block: P1): R;
    }
  }
}

declare const MSAttributeConverter: cocoa.classes.MSAttributeConverter;
