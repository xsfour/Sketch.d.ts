/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConstraintDescriptionLayoutRuleNode<T = any> extends cocoa._NSLayoutRuleNode {
    ownedConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setOwnedConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSConstraintDescriptionLayoutRuleNode<T = any> extends cocoa.classes._NSLayoutRuleNode {
      alloc<R = _NSConstraintDescriptionLayoutRuleNode>(): R;
      new: <R = _NSConstraintDescriptionLayoutRuleNode>() => R;
    }
  }
}
