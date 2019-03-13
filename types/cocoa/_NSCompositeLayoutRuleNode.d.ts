/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCompositeLayoutRuleNode<T = any> extends _NSLayoutRuleNode, _NSLayoutRuleNodeParentProtocol {
    childNodesCreatingIfNecessary<R = unknown>(): R;
    _childRuleNodes<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSCompositeLayoutRuleNode<T = any> extends _NSLayoutRuleNode, _NSLayoutRuleNodeParentProtocol {
      alloc<R = _NSCompositeLayoutRuleNode>(): R;
      new: <R = _NSCompositeLayoutRuleNode>() => R;
    }
  }
}
