/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFirstLineHeightTypesetter<T = any> extends cocoa.NSATSTypesetter {
    cxx_destruct<R = void>(): R;
    willSetLineFragmentRect_forGlyphRange_usedRect_baselineOffset<R = void, P0 = cocoa.CGRect, P1 = cocoa._NSRange, P2 = cocoa.CGRect, P3 = number>(_willSetLineFragmentRect: P0, _forGlyphRange: P1, _usedRect: P2, _baselineOffset: P3): R;
    delegate<R = cocoa.MSFirstLineTypesetterDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSFirstLineTypesetterDelegate>(_v: P0): R;
    forcedBaselineOffset<R = number>(): R;
    setForcedBaselineOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSFirstLineHeightTypesetter<T = any> extends cocoa.classes.NSATSTypesetter {  }
  }
}

declare const MSFirstLineHeightTypesetter: cocoa.classes.MSFirstLineHeightTypesetter;
