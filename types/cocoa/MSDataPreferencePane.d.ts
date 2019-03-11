/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataPreferencePane<T = any> extends cocoa.MSPreferencePane, cocoa.MSDropableViewDelegateProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTextFieldDelegateProtocol {
    setSelectedIndexesFromSelectionIdentifierArray<R = void>(): R;
    setSelectionIdentifierArrayFromSelectionIndexes<R = void>(): R;
    selectionDidChange<R = void>(): R;
    reloadData<R = void>(): R;
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    showContextMenu<R = void, P0 = unknown>(_showContextMenu: P0): R;
    menuForEvent<R = unknown, P0 = unknown>(_menuForEvent: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    validateShowPluginMenuItem<R = boolean, P0 = unknown>(_validateShowPluginMenuItem: P0): R;
    validateRevealInFinderMenuItem<R = boolean, P0 = unknown>(_validateRevealInFinderMenuItem: P0): R;
    revealInFinder<R = void, P0 = unknown>(_revealInFinder: P0): R;
    showPlugin<R = void, P0 = unknown>(_showPlugin: P0): R;
    revealLocalDataItemInFinder<R = void, P0 = unknown>(_revealLocalDataItemInFinder: P0): R;
    revealInFinderAction<R = void, P0 = unknown>(_revealInFinderAction: P0): R;
    draggedURLsFromPasteboard<R = unknown, P0 = unknown>(_draggedURLsFromPasteboard: P0): R;
    validateRemoveDataMenuItem<R = boolean, P0 = unknown>(_validateRemoveDataMenuItem: P0): R;
    alertMessageTextForRemovingDataSuppliers<R = unknown, P0 = unknown>(_alertMessageTextForRemovingDataSuppliers: P0): R;
    removeDataAction<R = void, P0 = unknown>(_removeDataAction: P0): R;
    importLocalData<R = void, P0 = unknown>(_importLocalData: P0): R;
    displayAddLocalDataErrorWithMessage_info<R = void, P0 = unknown, P1 = unknown>(_displayAddLocalDataErrorWithMessage: P0, _info: P1): R;
    dataSupplierForURL<R = unknown, P0 = unknown>(_dataSupplierForURL: P0): R;
    addLocalDataFromURLs<R = void, P0 = unknown>(_addLocalDataFromURLs: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    searchString<R = unknown>(): R;
    activateSearchField<R = void, P0 = unknown>(_activateSearchField: P0): R;
    awakeFromNib<R = void>(): R;
    dataFilterPredicate<R = cocoa.NSPredicate>(): R;
    setDataFilterPredicate<R = void, P0 = cocoa.NSPredicate>(_v: P0): R;
    filterTextField<R = cocoa.NSSearchField>(): R;
    setFilterTextField<R = void, P0 = cocoa.NSSearchField>(_v: P0): R;
    spyglassFilterButton<R = cocoa.NSButton>(): R;
    setSpyglassFilterButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    selectedItemIdentifiers<R = cocoa.NSArray>(): R;
    setSelectedItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    chooseDataPanelWindow<R = cocoa.NSWindow>(): R;
    setChooseDataPanelWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    data<R = cocoa.NSArray>(): R;
    setData<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    enableShowInFinder<R = boolean>(): R;
    setEnableShowInFinder<R = void, P0 = boolean>(_v: P0): R;
    shouldEnableCogMenu<R = boolean>(): R;
    setShouldEnableCogMenu<R = void, P0 = boolean>(_v: P0): R;
    contextMenu<R = cocoa.NSMenu>(): R;
    setContextMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    dataArrayController<R = cocoa.NSArrayController>(): R;
    setDataArrayController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    tableView<R = cocoa.MSDataTableView>(): R;
    setTableView<R = void, P0 = cocoa.MSDataTableView>(_v: P0): R;
    selectedData<R = cocoa.NSArray>(): R;
    dataSupplierManager<R = cocoa.MSDataSupplierManager>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDataPreferencePane<T = any> extends cocoa.classes.MSPreferencePane, cocoa.classes.MSDropableViewDelegateProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTextFieldDelegateProtocol {
      alloc<R = MSDataPreferencePane>(): R;
      new: <R = MSDataPreferencePane>() => R;
    }
  }
}

declare const MSDataPreferencePane: cocoa.classes.MSDataPreferencePane;
