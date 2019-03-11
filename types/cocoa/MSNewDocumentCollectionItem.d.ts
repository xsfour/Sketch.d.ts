/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewDocumentCollectionItem<T = any> extends cocoa.MSWelcomeCollectionItem {
    providesPreviewImage<R = boolean>(): R;
    title<R = unknown>(): R;
    placeholderImage<R = unknown>(): R;
  }
  namespace classes {
    export interface MSNewDocumentCollectionItem<T = any> extends cocoa.classes.MSWelcomeCollectionItem {
      alloc<R = MSNewDocumentCollectionItem>(): R;
      new: <R = MSNewDocumentCollectionItem>() => R;
    }
  }
}

declare const MSNewDocumentCollectionItem: cocoa.classes.MSNewDocumentCollectionItem;
