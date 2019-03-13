/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConstraintDescriptionLayoutRuleNode<T = any> extends _NSLayoutRuleNode {
    ownedConstraint<R = NSLayoutConstraint>(): R;
    setOwnedConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
  }
  namespace classes {
    export interface _NSConstraintDescriptionLayoutRuleNode<T = any> extends _NSLayoutRuleNode {
      alloc<R = _NSConstraintDescriptionLayoutRuleNode>(): R;
      new: <R = _NSConstraintDescriptionLayoutRuleNode>() => R;
    }
  }
}
