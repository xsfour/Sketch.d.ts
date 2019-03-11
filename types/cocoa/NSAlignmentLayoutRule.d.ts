/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlignmentLayoutRule<T = any> extends cocoa.NSObject, cocoa.NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithAlignedAnchors<R = unknown, P0 = unknown>(_initWithAlignedAnchors: P0): R;
    alignedAnchors<R = cocoa.NSArray>(): R;
    ruleDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAlignmentLayoutRule<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLayoutRuleProtocol {
      alloc<R = NSAlignmentLayoutRule>(): R;
      new: <R = NSAlignmentLayoutRule>() => R;
      alignmentWithAnchors<R = unknown, P0 = unknown>(_alignmentWithAnchors: P0): R;
    }
  }
}

declare const NSAlignmentLayoutRule: cocoa.classes.NSAlignmentLayoutRule;
