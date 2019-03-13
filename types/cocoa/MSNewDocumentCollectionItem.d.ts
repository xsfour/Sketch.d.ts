/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNewDocumentCollectionItem<T = any> extends MSWelcomeCollectionItem {
    providesPreviewImage<R = boolean>(): R;
    title<R = unknown>(): R;
    placeholderImage<R = unknown>(): R;
  }
  namespace classes {
    export interface MSNewDocumentCollectionItem<T = any> extends MSWelcomeCollectionItem {
      alloc<R = MSNewDocumentCollectionItem>(): R;
      new: <R = MSNewDocumentCollectionItem>() => R;
    }
  }
}

declare const MSNewDocumentCollectionItem: cocoa.classes.MSNewDocumentCollectionItem;
