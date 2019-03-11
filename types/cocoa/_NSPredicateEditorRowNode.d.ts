/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPredicateEditorRowNode<T = any> extends cocoa.NSObject {
    applyTemplate_withViews_forOriginalTemplate<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_applyTemplate: P0, _withViews: P1, _forOriginalTemplate: P2): R;
    dealloc<R = void>(): R;
    displayValue<R = unknown>(): R;
    templateView<R = unknown>(): R;
    title<R = unknown>(): R;
    hash<R = number>(): R;
    templateForRow<R = unknown>(): R;
    copyTemplateIfNecessary<R = void>(): R;
    children<R = cocoa.NSArray>(): R;
    setChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    templateViews<R = cocoa.NSMutableArray>(): R;
    setTemplateViews<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    copiedTemplateContainer<R = cocoa.NSMutableArray>(): R;
    setCopiedTemplateContainer<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    tree<R = cocoa._NSPredicateEditorTree>(): R;
  }
  namespace classes {
    export interface _NSPredicateEditorRowNode<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPredicateEditorRowNode>(): R;
      new: <R = _NSPredicateEditorRowNode>() => R;
      rowNodeFromTree<R = unknown, P0 = unknown>(_rowNodeFromTree: P0): R;
      _rowNodeFromTree_withTemplateTable<R = unknown, P0 = unknown, P1 = unknown>(__rowNodeFromTree: P0, _withTemplateTable: P1): R;
    }
  }
}
