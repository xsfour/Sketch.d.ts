/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferenceTableCellView<T = any> extends cocoa.NSTableCellView {
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    tableCellWidthConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setTableCellWidthConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    iconView<R = cocoa.MSPluginsPreferenceIconView>(): R;
    setIconView<R = void, P0 = cocoa.MSPluginsPreferenceIconView>(_v: P0): R;
    descriptionField<R = cocoa.NSTextField>(): R;
    setDescriptionField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    incompatiblePluginHeightConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setIncompatiblePluginHeightConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    updateAvailableHeightConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setUpdateAvailableHeightConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    pluginUpdating<R = cocoa.NSProgressIndicator>(): R;
    setPluginUpdating<R = void, P0 = cocoa.NSProgressIndicator>(_v: P0): R;
    updatePlugin<R = cocoa.NSButton>(): R;
    setUpdatePlugin<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    updateAvailableInfo<R = cocoa.MSPluginsPreferencesUpdateButton>(): R;
    setUpdateAvailableInfo<R = void, P0 = cocoa.MSPluginsPreferencesUpdateButton>(_v: P0): R;
    pluginIncompatibleContainer<R = cocoa.NSView>(): R;
    setPluginIncompatibleContainer<R = void, P0 = cocoa.NSView>(_v: P0): R;
    updateAvailableContainer<R = cocoa.NSView>(): R;
    setUpdateAvailableContainer<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface MSPluginsPreferenceTableCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSPluginsPreferenceTableCellView>(): R;
      new: <R = MSPluginsPreferenceTableCellView>() => R;
    }
  }
}

declare const MSPluginsPreferenceTableCellView: cocoa.classes.MSPluginsPreferenceTableCellView;
