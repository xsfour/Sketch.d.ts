/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationNodeBasedDFRItem<T = any> extends cocoa._NSFunctionRowCustomizationDFRItem {
    representedItem<R = unknown>(): R;
    treeNode<R = cocoa.NSTouchBarItemTreeItemNode>(): R;
    setTreeNode<R = void, P0 = cocoa.NSTouchBarItemTreeItemNode>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationNodeBasedDFRItem<T = any> extends cocoa.classes._NSFunctionRowCustomizationDFRItem {
      alloc<R = _NSFunctionRowCustomizationNodeBasedDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationNodeBasedDFRItem>() => R;
    }
  }
}
