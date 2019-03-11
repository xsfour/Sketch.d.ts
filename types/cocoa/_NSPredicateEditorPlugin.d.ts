/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPredicateEditorPlugin<T = any> extends cocoa._NSValueBinderPlugin {}
  namespace classes {
    export interface _NSPredicateEditorPlugin<T = any> extends cocoa.classes._NSValueBinderPlugin {
      alloc<R = _NSPredicateEditorPlugin>(): R;
      new: <R = _NSPredicateEditorPlugin>() => R;
    }
  }
}
