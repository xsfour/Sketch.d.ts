/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabSearchFilterOperation<T = any> extends cocoa.NSOperation {
    cxx_destruct<R = void>(): R;
    _completeOperationWithIndexes<R = void, P0 = unknown>(__completeOperationWithIndexes: P0): R;
    initWithTabInfoForFilteringTabs_filterText_completionCallback<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_initWithTabInfoForFilteringTabs: P0, _filterText: P1, _completionCallback: P2): R;
    tabInfo<R = cocoa.NSArray>(): R;
    setTabInfo<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    filterText<R = cocoa.NSString>(): R;
    filterCompletionCallback<R = cocoa.CDUnknownBlockType>(): R;
  }
  namespace classes {
    export interface NSTabSearchFilterOperation<T = any> extends cocoa.classes.NSOperation {
      alloc<R = NSTabSearchFilterOperation>(): R;
      new: <R = NSTabSearchFilterOperation>() => R;
    }
  }
}

declare const NSTabSearchFilterOperation: cocoa.classes.NSTabSearchFilterOperation;
