/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPredicateEditor<T = any> extends cocoa.NSRuleEditor {
    _sendsActionOnIncompleteTextChanges<R = boolean>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_setAction: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_setTarget: P0): R;
    _templateControlValueDidChange<R = void, P0 = unknown>(__templateControlValueDidChange: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidBeginEditing<R = void, P0 = unknown>(_controlTextDidBeginEditing: P0): R;
    _updatePredicateFromRows<R = void>(): R;
    _compoundPredicateTypeForRootRows<R = number>(): R;
    _predicateFromRowItem<R = unknown, P0 = unknown>(__predicateFromRowItem: P0): R;
    predicate<R = unknown>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    objectValue<R = unknown>(): R;
    _updateItemsByCompoundTemplates<R = void>(): R;
    _updateItemsBySimpleTemplates<R = void>(): R;
    _mergeTree<R = unknown, P0 = unknown>(__mergeTree: P0): R;
    _constructTreesForTemplates<R = unknown, P0 = unknown>(__constructTreesForTemplates: P0): R;
    _constructTreeForTemplate<R = unknown, P0 = unknown>(__constructTreeForTemplate: P0): R;
    _reflectPredicate<R = void, P0 = unknown>(__reflectPredicate: P0): R;
    _rowObjectFromPredicate<R = unknown, P0 = unknown>(__rowObjectFromPredicate: P0): R;
    _rowFromTemplate_originalTemplate_withRowType<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__rowFromTemplate: P0, _originalTemplate: P1, _withRowType: P2): R;
    _setDefaultTargetAndActionOnView<R = void, P0 = unknown>(__setDefaultTargetAndActionOnView: P0): R;
    _forceUseDelegate<R = boolean>(): R;
    rowTemplates<R = cocoa.NSArray>(): R;
    setRowTemplates<R = void, P0 = cocoa.NSArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSPredicateEditor<T = any> extends cocoa.classes.NSRuleEditor {
      alloc<R = NSPredicateEditor>(): R;
      new: <R = NSPredicateEditor>() => R;
    }
  }
}

declare const NSPredicateEditor: cocoa.classes.NSPredicateEditor;
