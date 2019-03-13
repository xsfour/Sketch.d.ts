/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExistingDocumentCollectionItem<T = any> extends MSWelcomeCollectionItem {
    providesPreviewImage<R = boolean>(): R;
    title<R = unknown>(): R;
    initWithController_URL<R = unknown, P0 = unknown, P1 = unknown>(_initWithController: P0, _URL: P1): R;
    URL<R = NSURL>(): R;
  }
  namespace classes {
    export interface MSExistingDocumentCollectionItem<T = any> extends MSWelcomeCollectionItem {
      alloc<R = MSExistingDocumentCollectionItem>(): R;
      new: <R = MSExistingDocumentCollectionItem>() => R;
    }
  }
}

declare const MSExistingDocumentCollectionItem: cocoa.classes.MSExistingDocumentCollectionItem;
