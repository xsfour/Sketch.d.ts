/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentConflictPanelController<T = any> extends cocoa.NSObject, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.QLPreviewPanelDelegateProtocol, cocoa.QLPreviewPanelDataSourceProtocol, cocoa.NSFilePresenterProtocol {
    previewPanel_shouldShowShareButtonForItem<R = boolean, P0 = unknown, P1 = unknown>(_previewPanel: P0, _shouldShowShareButtonForItem: P1): R;
    previewPanel_shouldOpenURL_forPreviewItem<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_previewPanel: P0, _shouldOpenURL: P1, _forPreviewItem: P2): R;
    previewPanel_shouldShowOpenButtonForItem<R = boolean, P0 = unknown, P1 = unknown>(_previewPanel: P0, _shouldShowOpenButtonForItem: P1): R;
    endPreviewPanelControl<R = void, P0 = unknown>(_endPreviewPanelControl: P0): R;
    beginPreviewPanelControl<R = void, P0 = unknown>(_beginPreviewPanelControl: P0): R;
    acceptsPreviewPanelControl<R = boolean, P0 = unknown>(_acceptsPreviewPanelControl: P0): R;
    _didClickOnImageView_forConflict<R = void, P0 = unknown, P1 = unknown>(__didClickOnImageView: P0, _forConflict: P1): R;
    _windowBackingDidChange<R = void, P0 = unknown>(__windowBackingDidChange: P0): R;
    _startLoadingThumbnailForConflict_force<R = void, P0 = unknown, P1 = boolean>(__startLoadingThumbnailForConflict: P0, _force: P1): R;
    _reloadConflictsRefreshingAll<R = void, P0 = boolean>(__reloadConflictsRefreshingAll: P0): R;
    _updateConflictDisplay<R = void>(): R;
    _enumerateAllRowViewsUsingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(__enumerateAllRowViewsUsingBlock: P0): R;
    _desiredHeightOfPanel<R = number>(): R;
    _shouldShowTableView<R = boolean>(): R;
    _updateNonTableView<R = void>(): R;
    _makeVersionView<R = unknown>(): R;
    _selectedConflictsChanged<R = void>(): R;
    _updateButtons<R = void>(): R;
    _keepButtonTitleForNumberOfSelectedVersions_totalNumber<R = unknown, P0 = number, P1 = number>(__keepButtonTitleForNumberOfSelectedVersions: P0, _totalNumber: P1): R;
    _unselectedConflicts<R = unknown>(): R;
    _selectedConflicts<R = unknown>(): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    keep<R = void, P0 = unknown>(_keep: P0): R;
    _panel<R = unknown>(): R;
    _conflictsForURL<R = unknown, P0 = unknown>(__conflictsForURL: P0): R;
    beginConflictPanelForURL_modalForWindow_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_beginConflictPanelForURL: P0, _modalForWindow: P1, _completionHandler: P2): R;
    _something_wasPresentedWithResult_soContinue<R = void, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(__something: P0, _wasPresentedWithResult: P1, _soContinue: P2): R;
    dealloc<R = void>(): R;
    presentedItemOperationQueue<R = cocoa.NSOperationQueue>(): R;
    presentedItemURL<R = cocoa.NSURL>(): R;
    unselectedVersions<R = cocoa.NSArray>(): R;
    selectedVersions<R = cocoa.NSArray>(): R;
    currentVersion<R = cocoa.NSFileVersion>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    observedPresentedItemUbiquityAttributes<R = cocoa.NSSet>(): R;
    primaryPresentedItemURL<R = cocoa.NSURL>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDocumentConflictPanelController<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.QLPreviewPanelDelegateProtocol, cocoa.classes.QLPreviewPanelDataSourceProtocol, cocoa.classes.NSFilePresenterProtocol {
      alloc<R = NSDocumentConflictPanelController>(): R;
      new: <R = NSDocumentConflictPanelController>() => R;
    }
  }
}

declare const NSDocumentConflictPanelController: cocoa.classes.NSDocumentConflictPanelController;
