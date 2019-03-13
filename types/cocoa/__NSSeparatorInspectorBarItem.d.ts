/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSSeparatorInspectorBarItem<T = any> extends NSInspectorBarItem {
    view<R = unknown>(): R;
  }
  namespace classes {
    export interface __NSSeparatorInspectorBarItem<T = any> extends NSInspectorBarItem {
      alloc<R = __NSSeparatorInspectorBarItem>(): R;
      new: <R = __NSSeparatorInspectorBarItem>() => R;
    }
  }
}
