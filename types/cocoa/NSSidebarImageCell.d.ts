/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSidebarImageCell<T = any> extends cocoa.NSImageCell {}
  namespace classes {
    export interface NSSidebarImageCell<T = any> extends cocoa.classes.NSImageCell {
      alloc<R = NSSidebarImageCell>(): R;
      new: <R = NSSidebarImageCell>() => R;
    }
  }
}

declare const NSSidebarImageCell: cocoa.classes.NSSidebarImageCell;
