/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStylePartInspectorValueAdaptor<T = any> extends cocoa.MSInspectorValueAdaptor {
    value<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStylePartInspectorValueAdaptor<T = any> extends cocoa.classes.MSInspectorValueAdaptor {
      alloc<R = MSStylePartInspectorValueAdaptor>(): R;
      new: <R = MSStylePartInspectorValueAdaptor>() => R;
    }
  }
}

declare const MSStylePartInspectorValueAdaptor: cocoa.classes.MSStylePartInspectorValueAdaptor;
