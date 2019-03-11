/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentationSearcher<T = any> extends cocoa.NSObject, cocoa.NSUserInterfaceItemSearchingProtocol {
    cxx_destruct<R = void>(): R;
    downloadRequest<R = unknown>(): R;
    addSearchOperationForItemsWithSearchString_completionBlock<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_addSearchOperationForItemsWithSearchString: P0, _completionBlock: P1): R;
    addDownloadOperation<R = void>(): R;
    documentationMightHaveChanged<R = void>(): R;
    searchEntries<R = cocoa.NSArray>(): R;
    setSearchEntries<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    queue<R = cocoa.NSOperationQueue>(): R;
    setQueue<R = void, P0 = cocoa.NSOperationQueue>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDocumentationSearcher<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSUserInterfaceItemSearchingProtocol {
      alloc<R = MSDocumentationSearcher>(): R;
      new: <R = MSDocumentationSearcher>() => R;
    }
  }
}

declare const MSDocumentationSearcher: cocoa.classes.MSDocumentationSearcher;
