/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSidebarImageCell<T = any> extends NSImageCell {}
  namespace classes {
    export interface NSSidebarImageCell<T = any> extends NSImageCell {
      alloc<R = NSSidebarImageCell>(): R;
      new: <R = NSSidebarImageCell>() => R;
    }
  }
}

declare const NSSidebarImageCell: cocoa.classes.NSSidebarImageCell;
