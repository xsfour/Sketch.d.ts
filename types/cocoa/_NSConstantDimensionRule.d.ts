/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConstantDimensionRule<T = any> extends cocoa.NSObject, cocoa.NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithConstant_dimensions<R = unknown, P0 = number, P1 = unknown>(_initWithConstant: P0, _dimensions: P1): R;
    constant<R = number>(): R;
    dimensions<R = cocoa.NSArray>(): R;
    ruleDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSConstantDimensionRule<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSLayoutRuleProtocol {
      alloc<R = _NSConstantDimensionRule>(): R;
      new: <R = _NSConstantDimensionRule>() => R;
      ruleWithConstant_dimensions<R = unknown, P0 = number, P1 = unknown>(_ruleWithConstant: P0, _dimensions: P1): R;
    }
  }
}
