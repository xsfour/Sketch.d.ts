/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorReplacementConverter<T = any> extends cocoa.NSObject, cocoa.MSColorConverterProtocol {
    cxx_destruct<R = void>(): R;
    initWithColor_replacementColor_colorSpace_ignoreAlphaWhenMatching_replaceAlphaOfOriginalColor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean, P4 = boolean>(_initWithColor: P0, _replacementColor: P1, _colorSpace: P2, _ignoreAlphaWhenMatching: P3, _replaceAlphaOfOriginalColor: P4): R;
    replacementColor<R = cocoa.MSColor>(): R;
    replaceAlphaOfOriginalColor<R = boolean>(): R;
    immutableReplacementColor<R = cocoa.MSImmutableColor>(): R;
    immutableColor<R = cocoa.MSImmutableColor>(): R;
    ignoreAlphaWhenMatching<R = boolean>(): R;
    colorSpace<R = cocoa.NSColorSpace>(): R;
    color<R = cocoa.MSColor>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorReplacementConverter<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSColorConverterProtocol {
      alloc<R = MSColorReplacementConverter>(): R;
      new: <R = MSColorReplacementConverter>() => R;
    }
  }
}

declare const MSColorReplacementConverter: cocoa.classes.MSColorReplacementConverter;
