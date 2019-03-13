/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionImageCell<T = any> extends NSImageCell {}
  namespace classes {
    export interface MSWelcomeCollectionImageCell<T = any> extends NSImageCell {
      alloc<R = MSWelcomeCollectionImageCell>(): R;
      new: <R = MSWelcomeCollectionImageCell>() => R;
    }
  }
}

declare const MSWelcomeCollectionImageCell: cocoa.classes.MSWelcomeCollectionImageCell;
