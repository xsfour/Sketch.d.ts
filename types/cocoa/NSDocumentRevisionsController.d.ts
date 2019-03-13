/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsController<T = any> extends NSObject, NSFilePresenterProtocol {
    startDownloadingCurrentVersion<R = void, P0 = unknown>(_startDownloadingCurrentVersion: P0): R;
    _startDownloadingStackItem_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__startDownloadingStackItem: P0, _completionHandler: P1): R;
    _finishedDownloadingNonLocalStackItem<R = void, P0 = unknown>(__finishedDownloadingNonLocalStackItem: P0): R;
    _updateAsyncVersionLookupStatus<R = void>(): R;
    _asyncVersionLookupInProgress<R = boolean>(): R;
    _setAsyncVersionLookupInProgress_forDocument<R = void, P0 = boolean, P1 = unknown>(__setAsyncVersionLookupInProgress: P0, _forDocument: P1): R;
    _asyncVersionLookupErrorCode<R = number>(): R;
    _setAsyncVersionLookupError_forDocument<R = void, P0 = unknown, P1 = unknown>(__setAsyncVersionLookupError: P0, _forDocument: P1): R;
    _stopIntrusionDetection<R = void>(): R;
    _startIntrusionDetection<R = void>(): R;
    _windowDidBecomeKey<R = void, P0 = unknown>(__windowDidBecomeKey: P0): R;
    _isKeyWindowAllowed<R = boolean, P0 = unknown>(__isKeyWindowAllowed: P0): R;
    _appDidDeactivate<R = void, P0 = unknown>(__appDidDeactivate: P0): R;
    _handleIntrusion<R = void>(): R;
    duplicateCurrentRevision<R = void>(): R;
    _doDuplicateRevisionDocument_thenContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__doDuplicateRevisionDocument: P0, _thenContinue: P1): R;
    timelineAction<R = void, P0 = unknown>(_timelineAction: P0): R;
    goToPreviousVersion<R = void, P0 = unknown>(_goToPreviousVersion: P0): R;
    goToNextVersion<R = void, P0 = unknown>(_goToNextVersion: P0): R;
    canGoToPreviousVersion<R = boolean>(): R;
    canGoToNextVersion<R = boolean>(): R;
    goToRevisionDidEnd<R = void>(): R;
    goToRevisionWillBegin<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    revertToCurrentRevision<R = void>(): R;
    _displayProgressPanelOnWindow_forDownloadingUbiquitousVersion_canceller<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(__displayProgressPanelOnWindow: P0, _forDownloadingUbiquitousVersion: P1, _canceller: P2): R;
    _something_didSomethingSoContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(__something: P0, _didSomethingSoContinue: P1): R;
    _something_wasPresentedWithResult_soContinue<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(__something: P0, _wasPresentedWithResult: P1, _soContinue: P2): R;
    _checkShouldRevertToChosenVersionThenContinue<R = void, P0 = CDUnknownBlockType>(__checkShouldRevertToChosenVersionThenContinue: P0): R;
    endVisualization<R = void>(): R;
    _endVisualizationAfterDelay<R = void>(): R;
    endVisualizationOfDocument_thenContinue<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_endVisualizationOfDocument: P0, _thenContinue: P1): R;
    endVisualizationThenContinue<R = void, P0 = CDUnknownBlockType>(_endVisualizationThenContinue: P0): R;
    endVisualizationWithOutcome_thenContinueAfterAnimation<R = void, P0 = number, P1 = CDUnknownBlockType>(_endVisualizationWithOutcome: P0, _thenContinueAfterAnimation: P1): R;
    endVisualizationWithOutcome_thenContinueAfterAnimation_thenContinueWhenExited<R = void, P0 = number, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_endVisualizationWithOutcome: P0, _thenContinueAfterAnimation: P1, _thenContinueWhenExited: P2): R;
    currentStackItemIndex<R = number>(): R;
    goToStackItemAtIndex<R = void, P0 = number>(_goToStackItemAtIndex: P0): R;
    setCurrentStackItemIndex<R = void, P0 = number>(_setCurrentStackItemIndex: P0): R;
    discardAnyChangesToOldDocument<R = void>(): R;
    _performFinishAnimationThenContinue_thenContinueWhenExited<R = void, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(__performFinishAnimationThenContinue: P0, _thenContinueWhenExited: P1): R;
    _restoreLiveEnvironment<R = void>(): R;
    _prepareForFinishAnimationWithOutcome<R = void, P0 = number>(__prepareForFinishAnimationWithOutcome: P0): R;
    _outcome<R = number>(): R;
    startVisualizationWithDocument_options_thenContinue<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_startVisualizationWithDocument: P0, _options: P1, _thenContinue: P2): R;
    _originalDocument<R = unknown>(): R;
    isVisualizingDocument<R = boolean, P0 = unknown>(_isVisualizingDocument: P0): R;
    isVisualizing<R = boolean>(): R;
    _performStartAnimation<R = void>(): R;
    _prepareForStartAnimation<R = boolean>(): R;
    _cancelTransitoryAnimations<R = void>(): R;
    _animateDisplayFadeOut<R = void, P0 = boolean>(__animateDisplayFadeOut: P0): R;
    _animateInspectorWindows<R = void>(): R;
    _closeDrawers<R = unknown>(): R;
    _startTransitoryAnimationsThenContinue<R = void, P0 = CDUnknownBlockType>(__startTransitoryAnimationsThenContinue: P0): R;
    _scheduleTransitoryAnimationOfWindow_startFrame_endFrame_startSize_endSize_hop_duration<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGRect, P3 = CGSize, P4 = CGSize, P5 = boolean, P6 = number>(__scheduleTransitoryAnimationOfWindow: P0, _startFrame: P1, _endFrame: P2, _startSize: P3, _endSize: P4, _hop: P5, _duration: P6): R;
    _uninstallEventTap<R = void>(): R;
    _installEventTap<R = void>(): R;
    _windowWillClose<R = void, P0 = unknown>(__windowWillClose: P0): R;
    _appWillTerminate<R = void, P0 = unknown>(__appWillTerminate: P0): R;
    _stopObservingWindowClosure<R = void>(): R;
    _startObservingWindowClosure<R = void>(): R;
    _windowDidResize<R = void, P0 = unknown>(__windowDidResize: P0): R;
    _stopObservingWindowFrameChanges<R = void>(): R;
    _startObservingWindowFrameChanges<R = void>(): R;
    _windowHasSheet<R = boolean>(): R;
    _sheetDidEnd<R = void, P0 = unknown>(__sheetDidEnd: P0): R;
    _unfocusWindowAfterSheetIfNecessary<R = void, P0 = unknown>(__unfocusWindowAfterSheetIfNecessary: P0): R;
    _sheetWillBegin<R = void, P0 = unknown>(__sheetWillBegin: P0): R;
    _stopObservingSheetsForWindow<R = void, P0 = unknown>(__stopObservingSheetsForWindow: P0): R;
    _startObservingSheetsForWindow<R = void, P0 = unknown>(__startObservingSheetsForWindow: P0): R;
    _unshiftRevisionWindow<R = void>(): R;
    _focusWindow<R = void, P0 = unknown>(__focusWindow: P0): R;
    _unfocusWindow<R = void, P0 = unknown>(__unfocusWindow: P0): R;
    _canUnfocusWindow<R = boolean, P0 = unknown>(__canUnfocusWindow: P0): R;
    _isWindowFocused<R = boolean, P0 = unknown>(__isWindowFocused: P0): R;
    _focusAnimationFromState_toState<R = unknown, P0 = number, P1 = number>(__focusAnimationFromState: P0, _toState: P1): R;
    _focusAnimationForOriginalWindow_fromState_toState<R = unknown, P0 = boolean, P1 = number, P2 = number>(__focusAnimationForOriginalWindow: P0, _fromState: P1, _toState: P2): R;
    _shouldHideTimelineForWindowFocusState<R = boolean, P0 = number>(__shouldHideTimelineForWindowFocusState: P0): R;
    _inspectorWindows<R = unknown>(): R;
    _restoreWindowCycling<R = void>(): R;
    _preventWindowCycling<R = void>(): R;
    takeOverWindow_forRevision<R = void, P0 = unknown, P1 = unknown>(_takeOverWindow: P0, _forRevision: P1): R;
    interceptsWindowClose<R = boolean, P0 = unknown>(_interceptsWindowClose: P0): R;
    _takeStartAnimationTransitionSnapshotsExcludingWindows<R = void, P0 = unknown>(__takeStartAnimationTransitionSnapshotsExcludingWindows: P0): R;
    _destinationFrameForResizeAfterFinishAnimation<R = CGRect>(): R;
    _frameForAnimatingWindowFrame_toSize<R = CGRect, P0 = CGRect, P1 = CGSize>(__frameForAnimatingWindowFrame: P0, _toSize: P1): R;
    _destinationFrameForFinishAnimation<R = CGRect>(): R;
    _resizedOriginalDocumentWindowFrame<R = CGRect>(): R;
    _hideRevisionWindow<R = void>(): R;
    _showRevisionWindow<R = void, P0 = unknown>(__showRevisionWindow: P0): R;
    _loadSnapshotForStackItem_forceNew_wait_thenContinue<R = void, P0 = unknown, P1 = boolean, P2 = boolean, P3 = CDUnknownBlockType>(__loadSnapshotForStackItem: P0, _forceNew: P1, _wait: P2, _thenContinue: P3): R;
    _snapshotForDocument<R = unknown, P0 = unknown>(__snapshotForDocument: P0): R;
    _requestUIForStackItem_wait_thenContinue<R = void, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(__requestUIForStackItem: P0, _wait: P1, _thenContinue: P2): R;
    _stopObservingRevisions<R = void>(): R;
    _startObservingRevisions<R = void>(): R;
    _presentedItemTemporaryVersionStorageIdentifier<R = unknown>(): R;
    _deleteAllVersions<R = void>(): R;
    _startAsynchronouslyFetchingVersionsForURL<R = CDUnknownBlockType, P0 = unknown>(__startAsynchronouslyFetchingVersionsForURL: P0): R;
    _startPredownloadingNonLocalVersions<R = void>(): R;
    _insertVersions<R = void, P0 = unknown>(__insertVersions: P0): R;
    _versionsForDocument<R = unknown, P0 = unknown>(__versionsForDocument: P0): R;
    _loadDocumentForStackItem_wait_completionBlock<R = void, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(__loadDocumentForStackItem: P0, _wait: P1, _completionBlock: P2): R;
    _cleanupVisualizationState<R = void>(): R;
    _closeAllRevisionDocuments<R = void>(): R;
    _updateRevisionCacheCosts<R = void>(): R;
    cacheWillEvictRevision<R = void, P0 = unknown>(_cacheWillEvictRevision: P0): R;
    _evictRevision<R = void, P0 = unknown>(__evictRevision: P0): R;
    _willEvictRevision<R = void, P0 = unknown>(__willEvictRevision: P0): R;
    _addRevisionToCache<R = void, P0 = unknown>(__addRevisionToCache: P0): R;
    _stopPreloadingRevisions<R = void>(): R;
    _startPreloadingRevisions<R = void>(): R;
    _preloadNextRevision<R = void, P0 = unknown>(__preloadNextRevision: P0): R;
    _nextRevisionIndexToPreload<R = number, P0 = unknown>(__nextRevisionIndexToPreload: P0): R;
    _preloadRevisionAtIndex_thenContinue<R = void, P0 = number, P1 = CDUnknownBlockType>(__preloadRevisionAtIndex: P0, _thenContinue: P1): R;
    _canPreloadRevisions<R = boolean>(): R;
    _canDeleteCurrentVersion<R = boolean>(): R;
    _preferredSizeForRevision<R = CGSize, P0 = unknown>(__preferredSizeForRevision: P0): R;
    _setPreferredSize_forRevision<R = void, P0 = CGSize, P1 = unknown>(__setPreferredSize: P0, _forRevision: P1): R;
    _relinquishRevision<R = void, P0 = unknown>(__relinquishRevision: P0): R;
    _setDocument_forRevision<R = void, P0 = unknown, P1 = unknown>(__setDocument: P0, _forRevision: P1): R;
    _acquireDocumentForRevision<R = unknown, P0 = unknown>(__acquireDocumentForRevision: P0): R;
    _windowForRevision<R = unknown, P0 = unknown>(__windowForRevision: P0): R;
    _currentDocument<R = unknown>(): R;
    _currentStackItem<R = unknown>(): R;
    _dictionaryForRevision<R = unknown, P0 = unknown>(__dictionaryForRevision: P0): R;
    makeBackstopStackItems<R = unknown>(): R;
    _cloudVersionPlaceholderView<R = unknown>(): R;
    _versionLoadFailedPlaceholderView<R = unknown>(): R;
    _snapshotOfPlaceholderView<R = unknown, P0 = unknown>(__snapshotOfPlaceholderView: P0): R;
    _takeSnapshotOfWindow<R = unknown, P0 = unknown>(__takeSnapshotOfWindow: P0): R;
    dealloc<R = void>(): R;
    presentedItemOperationQueue<R = NSOperationQueue>(): R;
    presentedItemURL<R = NSURL>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    observedPresentedItemUbiquityAttributes<R = NSSet>(): R;
    primaryPresentedItemURL<R = NSURL>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsController<T = any> extends NSObject, NSFilePresenterProtocol {
      alloc<R = NSDocumentRevisionsController>(): R;
      new: <R = NSDocumentRevisionsController>() => R;
      _windowForDocument<R = unknown, P0 = unknown>(__windowForDocument: P0): R;
      _takeScreenshotExcludingWindows<R = unknown, P0 = unknown>(__takeScreenshotExcludingWindows: P0): R;
      doOrderingWithoutAnimationForWindow_preventScrollerFlashing_withBlock<R = void, P0 = unknown, P1 = boolean, P2 = CDUnknownBlockType>(_doOrderingWithoutAnimationForWindow: P0, _preventScrollerFlashing: P1, _withBlock: P2): R;
      _setOverlayScrollersHidden_forWindow<R = void, P0 = boolean, P1 = unknown>(__setOverlayScrollersHidden: P0, _forWindow: P1): R;
      _setOverlayScrollersHidden_forView<R = void, P0 = boolean, P1 = unknown>(__setOverlayScrollersHidden: P0, _forView: P1): R;
      _hideOverlayScrollersForWindow<R = void, P0 = unknown>(__hideOverlayScrollersForWindow: P0): R;
      _hideOverlayScrollersForView<R = void, P0 = unknown>(__hideOverlayScrollersForView: P0): R;
      _descriptionForRevision<R = unknown, P0 = unknown>(__descriptionForRevision: P0): R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const NSDocumentRevisionsController: cocoa.classes.NSDocumentRevisionsController;
