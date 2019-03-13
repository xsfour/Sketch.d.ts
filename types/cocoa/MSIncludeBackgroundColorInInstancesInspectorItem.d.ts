/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIncludeBackgroundColorInInstancesInspectorItem<T = any> extends MSInspectorItem {}
  namespace classes {
    export interface MSIncludeBackgroundColorInInstancesInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSIncludeBackgroundColorInInstancesInspectorItem>(): R;
      new: <R = MSIncludeBackgroundColorInInstancesInspectorItem>() => R;
    }
  }
}

declare const MSIncludeBackgroundColorInInstancesInspectorItem: cocoa.classes.MSIncludeBackgroundColorInInstancesInspectorItem;
