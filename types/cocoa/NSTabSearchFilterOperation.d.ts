/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabSearchFilterOperation<T = any> extends NSOperation {
    cxx_destruct<R = void>(): R;
    _completeOperationWithIndexes<R = void, P0 = unknown>(__completeOperationWithIndexes: P0): R;
    initWithTabInfoForFilteringTabs_filterText_completionCallback<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_initWithTabInfoForFilteringTabs: P0, _filterText: P1, _completionCallback: P2): R;
    tabInfo<R = NSArray>(): R;
    setTabInfo<R = void, P0 = NSArray>(_v: P0): R;
    filterText<R = NSString>(): R;
    filterCompletionCallback<R = CDUnknownBlockType>(): R;
  }
  namespace classes {
    export interface NSTabSearchFilterOperation<T = any> extends NSOperation {
      alloc<R = NSTabSearchFilterOperation>(): R;
      new: <R = NSTabSearchFilterOperation>() => R;
    }
  }
}

declare const NSTabSearchFilterOperation: cocoa.classes.NSTabSearchFilterOperation;
