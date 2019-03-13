/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlignmentLayoutRule<T = any> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithAlignedAnchors<R = unknown, P0 = unknown>(_initWithAlignedAnchors: P0): R;
    alignedAnchors<R = NSArray>(): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    identifier<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAlignmentLayoutRule<T = any> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSAlignmentLayoutRule>(): R;
      new: <R = NSAlignmentLayoutRule>() => R;
      alignmentWithAnchors<R = unknown, P0 = unknown>(_alignmentWithAnchors: P0): R;
    }
  }
}

declare const NSAlignmentLayoutRule: cocoa.classes.NSAlignmentLayoutRule;
