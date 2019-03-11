/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCompositeLayoutRuleNode<T = any> extends cocoa._NSLayoutRuleNode, cocoa._NSLayoutRuleNodeParentProtocol {
    childNodesCreatingIfNecessary<R = unknown>(): R;
    _childRuleNodes<R = cocoa.NSArray>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSCompositeLayoutRuleNode<T = any> extends cocoa.classes._NSLayoutRuleNode, cocoa.classes._NSLayoutRuleNodeParentProtocol {
      alloc<R = _NSCompositeLayoutRuleNode>(): R;
      new: <R = _NSCompositeLayoutRuleNode>() => R;
    }
  }
}
