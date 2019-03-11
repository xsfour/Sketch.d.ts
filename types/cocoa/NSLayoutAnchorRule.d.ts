/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutAnchorRule<T = any> extends cocoa.NSObject, cocoa.NSLayoutRuleProtocol {
    makeLayoutConstraint<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithFirstAnchor_secondAnchor_relation_multiplier_constant_priority_identifier<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = number, P5 = number, P6 = unknown>(_initWithFirstAnchor: P0, _secondAnchor: P1, _relation: P2, _multiplier: P3, _constant: P4, _priority: P5, _identifier: P6): R;
    multiplier<R = number>(): R;
    priority<R = number>(): R;
    identifier<R = cocoa.NSString>(): R;
    constant<R = number>(): R;
    relation<R = number>(): R;
    secondAnchor<R = cocoa.NSLayoutAnchor>(): R;
    firstAnchor<R = cocoa.NSLayoutAnchor>(): R;
    ruleDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSLayoutAnchorRule<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLayoutRuleProtocol {
      alloc<R = NSLayoutAnchorRule>(): R;
      new: <R = NSLayoutAnchorRule>() => R;
    }
  }
}

declare const NSLayoutAnchorRule: cocoa.classes.NSLayoutAnchorRule;
