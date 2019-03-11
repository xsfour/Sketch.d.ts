/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutPointRule<T = any> extends cocoa.NSObject, cocoa.NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithFirstLayoutPoint_secondLayoutPoint<R = unknown, P0 = unknown, P1 = unknown>(_initWithFirstLayoutPoint: P0, _secondLayoutPoint: P1): R;
    secondLayoutPoint<R = cocoa.NSLayoutPoint>(): R;
    firstLayoutPoint<R = cocoa.NSLayoutPoint>(): R;
    ruleDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSLayoutPointRule<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLayoutRuleProtocol {
      alloc<R = NSLayoutPointRule>(): R;
      new: <R = NSLayoutPointRule>() => R;
    }
  }
}

declare const NSLayoutPointRule: cocoa.classes.NSLayoutPointRule;
