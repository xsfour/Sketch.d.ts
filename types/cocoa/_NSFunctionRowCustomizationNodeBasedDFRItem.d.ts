/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFunctionRowCustomizationNodeBasedDFRItem<T = any> extends _NSFunctionRowCustomizationDFRItem {
    representedItem<R = unknown>(): R;
    treeNode<R = NSTouchBarItemTreeItemNode>(): R;
    setTreeNode<R = void, P0 = NSTouchBarItemTreeItemNode>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFunctionRowCustomizationNodeBasedDFRItem<T = any> extends _NSFunctionRowCustomizationDFRItem {
      alloc<R = _NSFunctionRowCustomizationNodeBasedDFRItem>(): R;
      new: <R = _NSFunctionRowCustomizationNodeBasedDFRItem>() => R;
    }
  }
}
