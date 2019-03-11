/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferencePane<T = any> extends cocoa.MSPreferencePane, cocoa.NSTableViewDelegateProtocol, cocoa.MSDropableViewDelegateProtocol, cocoa.NSTextFieldDelegateProtocol {
    installPluginsWithURLArray<R = void, P0 = unknown>(_installPluginsWithURLArray: P0): R;
    draggedURLsFromPasteboard<R = unknown, P0 = unknown>(_draggedURLsFromPasteboard: P0): R;
    updateAndReloadPluginsWithBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_updateAndReloadPluginsWithBlock: P0): R;
    doAnyPluginsSupplyData<R = boolean, P0 = unknown>(_doAnyPluginsSupplyData: P0): R;
    makePluginCellView<R = unknown>(): R;
    attributedStringUpdateAvailableLinkForString<R = unknown, P0 = unknown>(_attributedStringUpdateAvailableLinkForString: P0): R;
    configurePluginUpdateInfoButton_withPluginInfo<R = void, P0 = unknown, P1 = unknown>(_configurePluginUpdateInfoButton: P0, _withPluginInfo: P1): R;
    tableCellViewContainingControl<R = unknown, P0 = unknown>(_tableCellViewContainingControl: P0): R;
    rowForControl<R = number, P0 = unknown>(_rowForControl: P0): R;
    setSelectedIndexesFromSelectionIdentifierArray<R = void>(): R;
    setSelectionIdentifierArrayFromSelectionIndexes<R = void>(): R;
    addPluginEnableToggleMenuItemWithPluginInfos_toMenu<R = void, P0 = unknown, P1 = unknown>(_addPluginEnableToggleMenuItemWithPluginInfos: P0, _toMenu: P1): R;
    areAnyPluginsDisabled<R = boolean>(): R;
    areAnyPluginsEnabled<R = boolean>(): R;
    areAllPluginsDisabled<R = boolean, P0 = unknown>(_areAllPluginsDisabled: P0): R;
    disablePluginInfo<R = void, P0 = unknown>(_disablePluginInfo: P0): R;
    enablePluginInfo<R = void, P0 = unknown>(_enablePluginInfo: P0): R;
    disableAllPlugins<R = void, P0 = unknown>(_disableAllPlugins: P0): R;
    enableAllPlugins<R = void, P0 = unknown>(_enableAllPlugins: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    menuNeedsUpdate<R = void, P0 = unknown>(_menuNeedsUpdate: P0): R;
    highlightPluginWithIdentifier<R = void, P0 = unknown>(_highlightPluginWithIdentifier: P0): R;
    viewDocumentation<R = void, P0 = unknown>(_viewDocumentation: P0): R;
    editCode<R = void, P0 = unknown>(_editCode: P0): R;
    revealInFinder<R = void, P0 = unknown>(_revealInFinder: P0): R;
    toggleItemsEnabled<R = void, P0 = unknown>(_toggleItemsEnabled: P0): R;
    toggleSelectedItemsEnabled<R = void>(): R;
    tableContextMenu<R = void, P0 = unknown>(_tableContextMenu: P0): R;
    activateSearchField<R = void, P0 = unknown>(_activateSearchField: P0): R;
    getPlugins<R = void, P0 = unknown>(_getPlugins: P0): R;
    openPluginURL<R = void, P0 = unknown>(_openPluginURL: P0): R;
    installPluginUpdates<R = void, P0 = unknown>(_installPluginUpdates: P0): R;
    installPluginUpdate<R = void, P0 = unknown>(_installPluginUpdate: P0): R;
    togglePluginEnabled<R = void, P0 = unknown>(_togglePluginEnabled: P0): R;
    uninstallSelectedPlugins<R = void, P0 = unknown>(_uninstallSelectedPlugins: P0): R;
    uninstallPlugins<R = void, P0 = unknown>(_uninstallPlugins: P0): R;
    uninstallSheetInfoTextForPlugins<R = unknown, P0 = unknown>(_uninstallSheetInfoTextForPlugins: P0): R;
    uninstallSheetMessageTextForPlugins<R = unknown, P0 = unknown>(_uninstallSheetMessageTextForPlugins: P0): R;
    openPluginsFolder<R = void, P0 = unknown>(_openPluginsFolder: P0): R;
    searchString<R = unknown>(): R;
    updateUIForPluginsChange<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    awakeFromNib<R = void>(): R;
    tableCellViewNib<R = cocoa.NSNib>(): R;
    setTableCellViewNib<R = void, P0 = cocoa.NSNib>(_v: P0): R;
    selectedItemIdentifiers<R = cocoa.NSArray>(): R;
    setSelectedItemIdentifiers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    originalHeightIncompatiblePlugin<R = number>(): R;
    setOriginalHeightIncompatiblePlugin<R = void, P0 = number>(_v: P0): R;
    originalHeightUpdatesAvailable<R = number>(): R;
    setOriginalHeightUpdatesAvailable<R = void, P0 = number>(_v: P0): R;
    zeroPluginsImageView<R = cocoa.NSImageView>(): R;
    setZeroPluginsImageView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    observingPlugins<R = boolean>(): R;
    setObservingPlugins<R = void, P0 = boolean>(_v: P0): R;
    rowHeightCache<R = cocoa.NSCache>(): R;
    setRowHeightCache<R = void, P0 = cocoa.NSCache>(_v: P0): R;
    filteredPlugins<R = cocoa.NSArray>(): R;
    setFilteredPlugins<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    pluginManager<R = cocoa.MSPluginManager>(): R;
    setPluginManager<R = void, P0 = cocoa.MSPluginManager>(_v: P0): R;
    enableUpdateAllButton<R = boolean>(): R;
    setEnableUpdateAllButton<R = void, P0 = boolean>(_v: P0): R;
    spyglassFilterButton<R = cocoa.NSButton>(): R;
    setSpyglassFilterButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    contextMenu<R = cocoa.NSMenu>(): R;
    setContextMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    contextMenuControl<R = cocoa.NSControl>(): R;
    setContextMenuControl<R = void, P0 = cocoa.NSControl>(_v: P0): R;
    getPluginsButton<R = cocoa.NSButton>(): R;
    setGetPluginsButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    tableView<R = cocoa.BCKeyEventActionTableView>(): R;
    setTableView<R = void, P0 = cocoa.BCKeyEventActionTableView>(_v: P0): R;
    filterTextField<R = cocoa.NSSearchField>(): R;
    setFilterTextField<R = void, P0 = cocoa.NSSearchField>(_v: P0): R;
    zeroPluginsText<R = cocoa.NSString>(): R;
    setZeroPluginsText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    zeroPluginsTitle<R = cocoa.NSString>(): R;
    setZeroPluginsTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    zeroPluginsImage<R = cocoa.NSImage>(): R;
    setZeroPluginsImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    pluginFilterPredicate<R = cocoa.NSPredicate>(): R;
    setPluginFilterPredicate<R = void, P0 = cocoa.NSPredicate>(_v: P0): R;
    pluginsArrayController<R = cocoa.NSArrayController>(): R;
    setPluginsArrayController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    pluginCellViewForHeightCalculations<R = cocoa.MSPluginsPreferenceTableCellView>(): R;
    pluginSortDescriptors<R = cocoa.NSArray>(): R;
    updatesAvailable<R = boolean>(): R;
    zeroPluginsTitleFont<R = cocoa.NSFont>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPluginsPreferencePane<T = any> extends cocoa.classes.MSPreferencePane, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.MSDropableViewDelegateProtocol, cocoa.classes.NSTextFieldDelegateProtocol {
      alloc<R = MSPluginsPreferencePane>(): R;
      new: <R = MSPluginsPreferencePane>() => R;
      openWithPluginToHighlight<R = void, P0 = unknown>(_openWithPluginToHighlight: P0): R;
    }
  }
}

declare const MSPluginsPreferencePane: cocoa.classes.MSPluginsPreferencePane;
