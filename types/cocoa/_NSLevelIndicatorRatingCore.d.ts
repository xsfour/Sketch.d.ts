/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorRatingCore<T = any> extends cocoa.NSObject, cocoa._NSLevelIndicatorCoreProtocol {
    _starAlignmentRectInsetsForState<R = cocoa.NSEdgeInsets, P0 = unknown>(__starAlignmentRectInsetsForState: P0): R;
    _starAlignmentRectForState<R = cocoa.CGRect, P0 = unknown>(__starAlignmentRectForState: P0): R;
    _starFrameForState<R = cocoa.CGRect, P0 = unknown>(__starFrameForState: P0): R;
    _effectiveFillColorForState<R = unknown, P0 = unknown>(__effectiveFillColorForState: P0): R;
    _effectiveRatingPlaceholderImageForState<R = unknown, P0 = unknown>(__effectiveRatingPlaceholderImageForState: P0): R;
    _effectiveRatingImageForState<R = unknown, P0 = unknown>(__effectiveRatingImageForState: P0): R;
    _defaultPlaceholderFade<R = number>(): R;
    _defaultPlaceholderFillColor<R = unknown>(): R;
    _defaultFillColor<R = unknown>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSLevelIndicatorRatingCore<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSLevelIndicatorCoreProtocol {
      alloc<R = _NSLevelIndicatorRatingCore>(): R;
      new: <R = _NSLevelIndicatorRatingCore>() => R;
    }
  }
}
