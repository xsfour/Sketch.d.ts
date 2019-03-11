/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPredicateEditorTree<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    menuItemIndex<R = number>(): R;
    setMenuItemIndex<R = void, P0 = number>(_v: P0): R;
    indexIntoTemplate<R = number>(): R;
    setIndexIntoTemplate<R = void, P0 = number>(_v: P0): R;
    children<R = cocoa.NSArray>(): R;
    setChildren<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    template<R = cocoa.NSPredicateEditorRowTemplate>(): R;
    setTemplate<R = void, P0 = cocoa.NSPredicateEditorRowTemplate>(_v: P0): R;
  }
  namespace classes {
    export interface _NSPredicateEditorTree<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPredicateEditorTree>(): R;
      new: <R = _NSPredicateEditorTree>() => R;
    }
  }
}
