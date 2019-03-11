/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUndoSetAttributes<T = any> extends cocoa.NSUndoTextOperation {}
  namespace classes {
    export interface NSUndoSetAttributes<T = any> extends cocoa.classes.NSUndoTextOperation {
      alloc<R = NSUndoSetAttributes>(): R;
      new: <R = NSUndoSetAttributes>() => R;
    }
  }
}

declare const NSUndoSetAttributes: cocoa.classes.NSUndoSetAttributes;
