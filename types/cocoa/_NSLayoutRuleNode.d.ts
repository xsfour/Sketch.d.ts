/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutRuleNode<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithRule<R = unknown, P0 = unknown>(_initWithRule: P0): R;
    parentNode<R = cocoa._NSLayoutRuleNodeParent>(): R;
    setParentNode<R = void, P0 = cocoa._NSLayoutRuleNodeParent>(_v: P0): R;
    representedRule<R = cocoa.NSLayoutRule>(): R;
    setRepresentedRule<R = void, P0 = cocoa.NSLayoutRule>(_v: P0): R;
  }
  namespace classes {
    export interface _NSLayoutRuleNode<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSLayoutRuleNode>(): R;
      new: <R = _NSLayoutRuleNode>() => R;
    }
  }
}
