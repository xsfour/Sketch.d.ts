/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLayoutRuleNodeParentProtocol<T = any> extends NSObjectProtocol {
    _removeChildRuleNode<R = void, P0 = _NSLayoutRuleNode>(__removeChildRuleNode: P0): R;
    _addChildRuleNode<R = void, P0 = _NSLayoutRuleNode>(__addChildRuleNode: P0): R;
    _childRuleNodes<R = NSArray>(): R;
  }
  namespace classes {
    export interface _NSLayoutRuleNodeParentProtocol<T = any> extends NSObjectProtocol {  }
  }
}
