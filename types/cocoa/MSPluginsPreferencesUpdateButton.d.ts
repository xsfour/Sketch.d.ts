/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferencesUpdateButton<T = any> extends cocoa.NSButton {
    cxx_destruct<R = void>(): R;
    awakeFromNib<R = void>(): R;
    tableCellView<R = cocoa.MSPluginsPreferenceTableCellView>(): R;
    setTableCellView<R = void, P0 = cocoa.MSPluginsPreferenceTableCellView>(_v: P0): R;
  }
  namespace classes {
    export interface MSPluginsPreferencesUpdateButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = MSPluginsPreferencesUpdateButton>(): R;
      new: <R = MSPluginsPreferencesUpdateButton>() => R;
    }
  }
}

declare const MSPluginsPreferencesUpdateButton: cocoa.classes.MSPluginsPreferencesUpdateButton;
