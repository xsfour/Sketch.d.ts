/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentationSearchEntry<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    show<R = void>(): R;
    matchesSearchQuery<R = boolean, P0 = unknown>(_matchesSearchQuery: P0): R;
    titles<R = unknown>(): R;
    isDuplicateResult<R = boolean>(): R;
    setIsDuplicateResult<R = void, P0 = boolean>(_v: P0): R;
    data<R = cocoa.NSDictionary>(): R;
    setData<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface MSDocumentationSearchEntry<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSDocumentationSearchEntry>(): R;
      new: <R = MSDocumentationSearchEntry>() => R;
      markSearchEntriesAsDuplicates<R = void, P0 = unknown>(_markSearchEntriesAsDuplicates: P0): R;
      searchEntryWithDictionary<R = unknown, P0 = unknown>(_searchEntryWithDictionary: P0): R;
    }
  }
}

declare const MSDocumentationSearchEntry: cocoa.classes.MSDocumentationSearchEntry;
