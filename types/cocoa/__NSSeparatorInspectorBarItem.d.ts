/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSSeparatorInspectorBarItem<T = any> extends cocoa.NSInspectorBarItem {
    view<R = unknown>(): R;
  }
  namespace classes {
    export interface __NSSeparatorInspectorBarItem<T = any> extends cocoa.classes.NSInspectorBarItem {
      alloc<R = __NSSeparatorInspectorBarItem>(): R;
      new: <R = __NSSeparatorInspectorBarItem>() => R;
    }
  }
}
