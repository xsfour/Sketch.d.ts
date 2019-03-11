/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowItem<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSFunctionRowItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFunctionRowItem>(): R;
      new: <R = NSFunctionRowItem>() => R;
    }
  }
}

declare const NSFunctionRowItem: cocoa.classes.NSFunctionRowItem;
