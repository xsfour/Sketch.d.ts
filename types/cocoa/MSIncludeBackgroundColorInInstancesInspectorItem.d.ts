/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIncludeBackgroundColorInInstancesInspectorItem<T = any> extends cocoa.MSInspectorItem {}
  namespace classes {
    export interface MSIncludeBackgroundColorInInstancesInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSIncludeBackgroundColorInInstancesInspectorItem>(): R;
      new: <R = MSIncludeBackgroundColorInInstancesInspectorItem>() => R;
    }
  }
}

declare const MSIncludeBackgroundColorInInstancesInspectorItem: cocoa.classes.MSIncludeBackgroundColorInInstancesInspectorItem;
