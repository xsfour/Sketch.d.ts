/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibrariesPreferencePane<T = any> extends cocoa.MSPreferencePane, cocoa.MSAssetPreferenceItemDelegateProtocol, cocoa.MSDropableViewDelegateProtocol, cocoa.QLPreviewPanelDataSourceProtocol, cocoa.QLPreviewPanelDelegateProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTextFieldDelegateProtocol {
    libraryControllerDidChange<R = void, P0 = unknown>(_libraryControllerDidChange: P0): R;
    learnMoreAboutLibraries<R = void, P0 = unknown>(_learnMoreAboutLibraries: P0): R;
    updateQLPreview<R = void>(): R;
    endPreviewPanelControl<R = void, P0 = unknown>(_endPreviewPanelControl: P0): R;
    beginPreviewPanelControl<R = void, P0 = unknown>(_beginPreviewPanelControl: P0): R;
    acceptsPreviewPanelControl<R = boolean, P0 = unknown>(_acceptsPreviewPanelControl: P0): R;
    toggleQLPreview<R = void, P0 = unknown>(_toggleQLPreview: P0): R;
    menuForEvent<R = unknown, P0 = unknown>(_menuForEvent: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    validateLocateLibraryMenuItem<R = boolean, P0 = unknown>(_validateLocateLibraryMenuItem: P0): R;
    locateLibraryAction<R = void, P0 = unknown>(_locateLibraryAction: P0): R;
    canLocateLibrary<R = boolean, P0 = unknown>(_canLocateLibrary: P0): R;
    validateOpenInSketchMenuItem<R = boolean, P0 = unknown>(_validateOpenInSketchMenuItem: P0): R;
    openInSketchAction<R = void, P0 = unknown>(_openInSketchAction: P0): R;
    validateRemoveLibraryMenuItem<R = boolean, P0 = unknown>(_validateRemoveLibraryMenuItem: P0): R;
    removeLibraryAction<R = void, P0 = unknown>(_removeLibraryAction: P0): R;
    availableUserLibrariesFromLibraries<R = boolean, P0 = unknown>(_availableUserLibrariesFromLibraries: P0): R;
    sketchShareURLsFromLibraries<R = unknown, P0 = unknown>(_sketchShareURLsFromLibraries: P0): R;
    validateRevealInFinderMenuItem<R = boolean, P0 = unknown>(_validateRevealInFinderMenuItem: P0): R;
    revealInFinderAction<R = void, P0 = unknown>(_revealInFinderAction: P0): R;
    validateToggleLibraryMenuItem<R = boolean, P0 = unknown>(_validateToggleLibraryMenuItem: P0): R;
    multipleLibrariesSelected<R = boolean>(): R;
    toggleLibraryEnabled<R = void, P0 = unknown>(_toggleLibraryEnabled: P0): R;
    hasDisabledLibrariesSelected<R = boolean>(): R;
    draggedURLsFromPasteboard<R = unknown, P0 = unknown>(_draggedURLsFromPasteboard: P0): R;
    displayDuplicateAlertSheetForRemoteAssetLibrary<R = void, P0 = unknown>(_displayDuplicateAlertSheetForRemoteAssetLibrary: P0): R;
    displayInstallerAlertSheetForRemoteAssetLibrary<R = void>(): R;
    displayAlertSheetWithMessageText_informativeText_buttonTitle_cancelButton_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = cocoa.CDUnknownBlockType>(_displayAlertSheetWithMessageText: P0, _informativeText: P1, _buttonTitle: P2, _cancelButton: P3, _completionHandler: P4): R;
    tableCellForLibrary<R = unknown, P0 = unknown>(_tableCellForLibrary: P0): R;
    startDownloadForRemoteLibrary<R = void, P0 = unknown>(_startDownloadForRemoteLibrary: P0): R;
    updateAvailableForRemoteLibrary<R = void, P0 = unknown>(_updateAvailableForRemoteLibrary: P0): R;
    reloadSelectingLibrary<R = void, P0 = unknown>(_reloadSelectingLibrary: P0): R;
    showContextMenu<R = void, P0 = unknown>(_showContextMenu: P0): R;
    currentLibrary<R = unknown>(): R;
    addLibrariesFromURLS<R = void, P0 = unknown>(_addLibrariesFromURLS: P0): R;
    importLibraryAction<R = void, P0 = unknown>(_importLibraryAction: P0): R;
    addNextLibraryFromURLs<R = void, P0 = unknown>(_addNextLibraryFromURLs: P0): R;
    searchString<R = unknown>(): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    doesNewPredicateGiveDifferentResult<R = boolean, P0 = unknown>(_doesNewPredicateGiveDifferentResult: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    activateSearchField<R = void, P0 = unknown>(_activateSearchField: P0): R;
    syncLibraryItems<R = void>(): R;
    awakeFromNib<R = void>(): R;
    librariesFilterPredicate<R = cocoa.NSPredicate>(): R;
    setLibrariesFilterPredicate<R = void, P0 = cocoa.NSPredicate>(_v: P0): R;
    chooseLibraryPanelWindow<R = cocoa.NSWindow>(): R;
    setChooseLibraryPanelWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    duplicateLibraryAlertWindow<R = cocoa.NSWindow>(): R;
    setDuplicateLibraryAlertWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    libraryInstallerAlertWindow<R = cocoa.NSWindow>(): R;
    setLibraryInstallerAlertWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    shouldEnableCogMenu<R = boolean>(): R;
    setShouldEnableCogMenu<R = void, P0 = boolean>(_v: P0): R;
    hasAssets<R = boolean>(): R;
    setHasAssets<R = void, P0 = boolean>(_v: P0): R;
    filterTextField<R = cocoa.NSSearchField>(): R;
    setFilterTextField<R = void, P0 = cocoa.NSSearchField>(_v: P0): R;
    spyglassFilterButton<R = cocoa.NSButton>(): R;
    setSpyglassFilterButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    contextMenu<R = cocoa.NSMenu>(): R;
    setContextMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    items<R = cocoa.NSArray>(): R;
    setItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    librariesArrayController<R = cocoa.NSArrayController>(): R;
    setLibrariesArrayController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    tableView<R = cocoa.MSAssetLibraryTableView>(): R;
    setTableView<R = void, P0 = cocoa.MSAssetLibraryTableView>(_v: P0): R;
    selectedLibraries<R = cocoa.NSArray>(): R;
    selection<R = cocoa.NSArray>(): R;
    assetLibraryController<R = cocoa.MSAssetLibraryController>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAssetLibrariesPreferencePane<T = any> extends cocoa.classes.MSPreferencePane, cocoa.classes.MSAssetPreferenceItemDelegateProtocol, cocoa.classes.MSDropableViewDelegateProtocol, cocoa.classes.QLPreviewPanelDataSourceProtocol, cocoa.classes.QLPreviewPanelDelegateProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTextFieldDelegateProtocol {
      alloc<R = MSAssetLibrariesPreferencePane>(): R;
      new: <R = MSAssetLibrariesPreferencePane>() => R;
    }
  }
}

declare const MSAssetLibrariesPreferencePane: cocoa.classes.MSAssetLibrariesPreferencePane;
