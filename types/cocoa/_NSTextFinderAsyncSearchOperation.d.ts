/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderAsyncSearchOperation<T = any> extends cocoa.NSOperation {
    _sendUpdate<R = void>(): R;
    searchFinished<R = boolean>(): R;
    waitUntilSearchCompletedForRanges_orTimeout<R = boolean, P0 = unknown, P1 = number>(_waitUntilSearchCompletedForRanges: P0, _orTimeout: P1): R;
    _searchCompletedForIndexes<R = boolean, P0 = unknown>(__searchCompletedForIndexes: P0): R;
    _addMatchRange_searchedRange<R = void, P0 = cocoa._NSRange, P1 = cocoa._NSRange>(__addMatchRange: P0, _searchedRange: P1): R;
    accessSearchResultsInBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_accessSearchResultsInBlock: P0): R;
    indexesWaitedFor<R = cocoa.NSIndexSet>(): R;
    setIndexesWaitedFor<R = void, P0 = cocoa.NSIndexSet>(_v: P0): R;
    searchedIndexes<R = cocoa.NSMutableIndexSet>(): R;
    matchRanges<R = cocoa.NSMutableRangeArray>(): R;
    matchOptions<R = number>(): R;
    setMatchOptions<R = void, P0 = number>(_v: P0): R;
    searchOptions<R = number>(): R;
    setSearchOptions<R = void, P0 = number>(_v: P0): R;
    contentString<R = cocoa.NSString>(): R;
    setContentString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    searchString<R = cocoa.NSString>(): R;
    setSearchString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    searchController<R = cocoa.NSTextFinderAsyncSearch>(): R;
    setSearchController<R = void, P0 = cocoa.NSTextFinderAsyncSearch>(_v: P0): R;
  }
  namespace classes {
    export interface _NSTextFinderAsyncSearchOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = _NSTextFinderAsyncSearchOperation>(): R;
      new: <R = _NSTextFinderAsyncSearchOperation>() => R;
    }
  }
}
