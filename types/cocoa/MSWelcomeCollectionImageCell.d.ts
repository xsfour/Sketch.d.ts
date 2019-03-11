/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionImageCell<T = any> extends cocoa.NSImageCell {}
  namespace classes {
    export interface MSWelcomeCollectionImageCell<T = any> extends cocoa.classes.NSImageCell {
      alloc<R = MSWelcomeCollectionImageCell>(): R;
      new: <R = MSWelcomeCollectionImageCell>() => R;
    }
  }
}

declare const MSWelcomeCollectionImageCell: cocoa.classes.MSWelcomeCollectionImageCell;
