/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBorder<T = any> extends cocoa._MSStyleBorder, cocoa.MSColorConvertibleProtocol {
    asFill<R = unknown>(): R;
    supportsAdvancedBorderSettings<R = boolean>(): R;
    patternFillType<R = number>(): R;
    noiseIntensity<R = number>(): R;
    CSSAttributeString<R = unknown>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStyleBorder<T = any> extends cocoa.classes._MSStyleBorder, cocoa.classes.MSColorConvertibleProtocol {
      alloc<R = MSStyleBorder>(): R;
      new: <R = MSStyleBorder>() => R;
    }
  }
}

declare const MSStyleBorder: cocoa.classes.MSStyleBorder;
