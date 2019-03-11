/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorAux<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    dealloc<R = void>(): R;
    customRatingPlaceholderImage<R = cocoa.NSImage>(): R;
    setCustomRatingPlaceholderImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    customRatingImage<R = cocoa.NSImage>(): R;
    setCustomRatingImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    customCriticalFillColor<R = cocoa.NSColor>(): R;
    setCustomCriticalFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    customWarningFillColor<R = cocoa.NSColor>(): R;
    setCustomWarningFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    customFillColor<R = cocoa.NSColor>(): R;
    setCustomFillColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface _NSLevelIndicatorAux<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = _NSLevelIndicatorAux>(): R;
      new: <R = _NSLevelIndicatorAux>() => R;
    }
  }
}
