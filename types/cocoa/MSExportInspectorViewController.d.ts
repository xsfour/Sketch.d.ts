/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportInspectorViewController<T = any> extends cocoa.MSInspectorItem {
    firstResponderIgnoringFieldEditor<R = unknown>(): R;
    editExportPresets<R = void, P0 = unknown>(_editExportPresets: P0): R;
    addExportPreset<R = void, P0 = unknown>(_addExportPreset: P0): R;
    unApplyAllExportPresets<R = void, P0 = unknown>(_unApplyAllExportPresets: P0): R;
    applyExportPreset<R = void, P0 = unknown>(_applyExportPreset: P0): R;
    findExportFormatAmong_equalToFormat<R = unknown, P0 = unknown, P1 = unknown>(_findExportFormatAmong: P0, _equalToFormat: P1): R;
    exportPresetAppliesToSelectedLayers<R = boolean, P0 = unknown>(_exportPresetAppliesToSelectedLayers: P0): R;
    showExportPresetMenu<R = void, P0 = unknown>(_showExportPresetMenu: P0): R;
    createSliceAction<R = void, P0 = unknown>(_createSliceAction: P0): R;
    document<R = unknown>(): R;
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
    hasEnabledStyle<R = boolean>(): R;
    prepare<R = void>(): R;
    setLayers<R = void, P0 = unknown>(_setLayers: P0): R;
    headerItem<R = cocoa.MSHeaderInspectorItem>(): R;
    setHeaderItem<R = void, P0 = cocoa.MSHeaderInspectorItem>(_v: P0): R;
    textLabelRightConstraintExpandedWidth<R = number>(): R;
    setTextLabelRightConstraintExpandedWidth<R = void, P0 = number>(_v: P0): R;
    formatViewControllers<R = cocoa.NSArray>(): R;
    setFormatViewControllers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    nameView<R = cocoa.NSView>(): R;
    setNameView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    textLabelRightConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setTextLabelRightConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    headerLabel<R = cocoa.NSTextField>(): R;
    setHeaderLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    exportFormatLabelTextField<R = cocoa.NSTextField>(): R;
    setExportFormatLabelTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    exportPresetsMenuButton<R = cocoa.NSButton>(): R;
    setExportPresetsMenuButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    knifeButton<R = cocoa.NSButton>(): R;
    setKnifeButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    addExportFormatButton<R = cocoa.NSButton>(): R;
    setAddExportFormatButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    bottomLabelView<R = cocoa.NSView>(): R;
    setBottomLabelView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    views<R = cocoa.NSArray>(): R;
    hasExports<R = boolean>(): R;
  }
  namespace classes {
    export interface MSExportInspectorViewController<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSExportInspectorViewController>(): R;
      new: <R = MSExportInspectorViewController>() => R;
    }
  }
}

declare const MSExportInspectorViewController: cocoa.classes.MSExportInspectorViewController;
