/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutRectRule<T = any> extends cocoa.NSObject, cocoa.NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithFirstLayoutRect_secondLayoutRect_relation<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithFirstLayoutRect: P0, _secondLayoutRect: P1, _relation: P2): R;
    initWithFirstLayoutRect_secondLayoutRect<R = unknown, P0 = unknown, P1 = unknown>(_initWithFirstLayoutRect: P0, _secondLayoutRect: P1): R;
    relation<R = number>(): R;
    setRelation<R = void, P0 = number>(_v: P0): R;
    secondLayoutRect<R = cocoa.NSLayoutRect>(): R;
    firstLayoutRect<R = cocoa.NSLayoutRect>(): R;
    ruleDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSLayoutRectRule<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLayoutRuleProtocol {
      alloc<R = NSLayoutRectRule>(): R;
      new: <R = NSLayoutRectRule>() => R;
    }
  }
}

declare const NSLayoutRectRule: cocoa.classes.NSLayoutRectRule;
