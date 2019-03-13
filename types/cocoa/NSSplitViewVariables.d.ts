/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSplitViewVariables<T = any> extends NSObject {}
  namespace classes {
    export interface NSSplitViewVariables<T = any> extends NSObject {
      alloc<R = NSSplitViewVariables>(): R;
      new: <R = NSSplitViewVariables>() => R;
    }
  }
}

declare const NSSplitViewVariables: cocoa.classes.NSSplitViewVariables;
