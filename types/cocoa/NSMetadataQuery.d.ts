/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMetadataQuery<T = any> extends cocoa.NSObject {
    _isMDQuery<R = boolean>(): R;
    removeObserver_forKeyPath<R = void, P0 = unknown, P1 = unknown>(_removeObserver: P0, _forKeyPath: P1): R;
    _pendingChangeNotificationsArrayForKey_create<R = unknown, P0 = unknown, P1 = boolean>(__pendingChangeNotificationsArrayForKey: P0, _create: P1): R;
    valueOfAttribute_forResultAtIndex<R = unknown, P0 = unknown, P1 = number>(_valueOfAttribute: P0, _forResultAtIndex: P1): R;
    indexOfResult<R = number, P0 = unknown>(_indexOfResult: P0): R;
    _zapResultArrayIfIdenticalTo<R = void, P0 = unknown>(__zapResultArrayIfIdenticalTo: P0): R;
    enumerateResultsWithOptions_usingBlock<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_enumerateResultsWithOptions: P0, _usingBlock: P1): R;
    enumerateResultsUsingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateResultsUsingBlock: P0): R;
    resultAtIndex<R = unknown, P0 = number>(_resultAtIndex: P0): R;
    _update<R = void>(): R;
    _enableAutoUpdates<R = void>(): R;
    _disableAutoUpdates<R = void>(): R;
    enableUpdates<R = void>(): R;
    disableUpdates<R = void>(): R;
    stopQuery<R = void>(): R;
    _inOriginalContextInvokeBlock<R = void, P0 = cocoa.CDUnknownBlockType>(__inOriginalContextInvokeBlock: P0): R;
    startQuery<R = boolean>(): R;
    _recreateQuery<R = void>(): R;
    _resetQueryState<R = void>(): R;
    _queryString<R = unknown>(): R;
    _noteNote5<R = void, P0 = unknown>(__noteNote5: P0): R;
    _noteNote4<R = void, P0 = unknown>(__noteNote4: P0): R;
    _noteNote3<R = void, P0 = unknown>(__noteNote3: P0): R;
    _noteNote2<R = void, P0 = unknown>(__noteNote2: P0): R;
    _noteNote1<R = void, P0 = unknown>(__noteNote1: P0): R;
    _postNotificationName_userInfo<R = void, P0 = unknown, P1 = unknown>(__postNotificationName: P0, _userInfo: P1): R;
    _setBatchingParams<R = void>(): R;
    _setExternalDocumentsBundleIdentifier<R = void, P0 = unknown>(__setExternalDocumentsBundleIdentifier: P0): R;
    _externalDocumentsBundleIdentifier<R = unknown>(): R;
    setSearchItemURLs<R = void, P0 = unknown>(_setSearchItemURLs: P0): R;
    searchItemURLs<R = unknown>(): R;
    _allAttributes<R = unknown>(): R;
    _sortingAttributes<R = unknown>(): R;
    _validatePredicate_withScopes<R = void, P0 = unknown, P1 = unknown>(__validatePredicate: P0, _withScopes: P1): R;
    _validateInvocationContext<R = void>(): R;
    _canModifyQueryOrObserversInCurrentContext<R = boolean>(): R;
    dealloc<R = void>(): R;
    groupedResults<R = cocoa.NSArray>(): R;
    valueLists<R = cocoa.NSDictionary>(): R;
    results<R = cocoa.NSArray>(): R;
    resultCount<R = number>(): R;
    stopped<R = boolean>(): R;
    gathering<R = boolean>(): R;
    started<R = boolean>(): R;
    searchItems<R = cocoa.NSArray>(): R;
    setSearchItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    operationQueue<R = cocoa.NSOperationQueue>(): R;
    setOperationQueue<R = void, P0 = cocoa.NSOperationQueue>(_v: P0): R;
    searchScopes<R = cocoa.NSArray>(): R;
    setSearchScopes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    notificationBatchingInterval<R = number>(): R;
    setNotificationBatchingInterval<R = void, P0 = number>(_v: P0): R;
    groupingAttributes<R = cocoa.NSArray>(): R;
    setGroupingAttributes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    valueListAttributes<R = cocoa.NSArray>(): R;
    setValueListAttributes<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    sortDescriptors<R = cocoa.NSArray>(): R;
    setSortDescriptors<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    predicate<R = cocoa.NSPredicate>(): R;
    setPredicate<R = void, P0 = cocoa.NSPredicate>(_v: P0): R;
    delegate<R = cocoa.NSMetadataQueryDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSMetadataQueryDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSMetadataQuery<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSMetadataQuery>(): R;
      new: <R = NSMetadataQuery>() => R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
      didEndPossibleFileOperation<R = void, P0 = unknown>(_didEndPossibleFileOperation: P0): R;
      willBeginPossibleCreationOfItemAtURL<R = unknown, P0 = unknown>(_willBeginPossibleCreationOfItemAtURL: P0): R;
      willBeginPossibleDeletionOfItemAtURL<R = unknown, P0 = unknown>(_willBeginPossibleDeletionOfItemAtURL: P0): R;
      willBeginPossibleMoveOfItemAtURL_toURL<R = unknown, P0 = unknown, P1 = unknown>(_willBeginPossibleMoveOfItemAtURL: P0, _toURL: P1): R;
      _stitchingClass<R = unknown>(): R;
    }
  }
}

declare const NSMetadataQuery: cocoa.classes.NSMetadataQuery;
