/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPresetsPreferencePane<T = any> extends cocoa.MSPreferencePane, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTableViewDelegateProtocol {
    adjustFirstResponderIfNeeded<R = void>(): R;
    restoreDefaultExportPresets<R = void, P0 = unknown>(_restoreDefaultExportPresets: P0): R;
    removeExportFormatFromPreset<R = void, P0 = unknown>(_removeExportFormatFromPreset: P0): R;
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
    commitExportPresetName<R = void, P0 = unknown>(_commitExportPresetName: P0): R;
    uniqueNonEmptyName_forPreset<R = unknown, P0 = unknown, P1 = unknown>(_uniqueNonEmptyName: P0, _forPreset: P1): R;
    presetWithName<R = unknown, P0 = unknown>(_presetWithName: P0): R;
    pickDefaultExportPreset<R = void, P0 = unknown>(_pickDefaultExportPreset: P0): R;
    removeExportPreset<R = void, P0 = unknown>(_removeExportPreset: P0): R;
    addExportPreset<R = void, P0 = unknown>(_addExportPreset: P0): R;
    refreshExportFormats<R = void>(): R;
    refreshExportPresets<R = void>(): R;
    commitPendingTextEditsIfNeeded<R = void>(): R;
    editExportPreset<R = void, P0 = unknown>(_editExportPreset: P0): R;
    selectPreset<R = boolean, P0 = unknown>(_selectPreset: P0): R;
    selectPresetAtIndex<R = boolean, P0 = number>(_selectPresetAtIndex: P0): R;
    globalAssets<R = unknown>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    exportFormatViewControllers<R = cocoa.NSArray>(): R;
    setExportFormatViewControllers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    designedExportFormatFooterBottomDistance<R = number>(): R;
    designedSize<R = cocoa.CGSize>(): R;
    tableView<R = cocoa.NSTableView>(): R;
    setTableView<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    removeButton<R = cocoa.NSButton>(): R;
    setRemoveButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    presetNameTextField<R = cocoa.NSTextField>(): R;
    setPresetNameTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    noPresetsPlaceholderView<R = cocoa.NSView>(): R;
    setNoPresetsPlaceholderView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    exportFormatsViewController<R = cocoa.MSExportFormatViewController>(): R;
    setExportFormatsViewController<R = void, P0 = cocoa.MSExportFormatViewController>(_v: P0): R;
    exportFormatsView<R = cocoa.NSStackView>(): R;
    setExportFormatsView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    exportFormatFooterBottomConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setExportFormatFooterBottomConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    exportFormatFooterView<R = cocoa.NSView>(): R;
    setExportFormatFooterView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    exportFormatEditorView<R = cocoa.NSView>(): R;
    setExportFormatEditorView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    addFormatButton<R = cocoa.NSButton>(): R;
    setAddFormatButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    addButton<R = cocoa.NSButton>(): R;
    setAddButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    selectedPreset<R = cocoa.MSExportPreset>(): R;
    presets<R = cocoa.NSArray>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSExportPresetsPreferencePane<T = any> extends cocoa.classes.MSPreferencePane, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTableViewDelegateProtocol {
      alloc<R = MSExportPresetsPreferencePane>(): R;
      new: <R = MSExportPresetsPreferencePane>() => R;
      localizedNewExportPresetName<R = unknown>(): R;
      exportPresetWithNameExists<R = boolean, P0 = unknown>(_exportPresetWithNameExists: P0): R;
    }
  }
}

declare const MSExportPresetsPreferencePane: cocoa.classes.MSExportPresetsPreferencePane;
