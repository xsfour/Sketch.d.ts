/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentGuide<T = any> extends NSObject, NSInputAlignmentGuideProtocol {
    initWithType_referenceValues<R = unknown, P0 = number, P1 = unknown>(_initWithType: P0, _referenceValues: P1): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSInputAlignmentGuide<T = any> extends NSObject, NSInputAlignmentGuideProtocol {
      alloc<R = NSInputAlignmentGuide>(): R;
      new: <R = NSInputAlignmentGuide>() => R;
      guidesBorderingRect<R = unknown, P0 = CGRect>(_guidesBorderingRect: P0): R;
      guideWithType_referenceValues<R = unknown, P0 = number, P1 = unknown>(_guideWithType: P0, _referenceValues: P1): R;
    }
  }
}

declare const NSInputAlignmentGuide: cocoa.classes.NSInputAlignmentGuide;
