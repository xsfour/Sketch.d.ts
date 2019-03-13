/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextHeaderInspectorItem<T = any> extends MSCollapsibleHeaderInspectorItem {
    toggleSettings<R = void, P0 = unknown>(_toggleSettings: P0): R;
    updateUI<R = void>(): R;
    detailSettingsEnabled<R = boolean>(): R;
    setDetailSettingsEnabled<R = void, P0 = boolean>(_v: P0): R;
    detailSettingsDisclosed<R = boolean>(): R;
    setDetailSettingsDisclosed<R = void, P0 = boolean>(_v: P0): R;
    detailSettingsVisible<R = boolean>(): R;
    setDetailSettingsVisible<R = void, P0 = boolean>(_v: P0): R;
    detailSettingsButton<R = NSButton>(): R;
    setDetailSettingsButton<R = void, P0 = NSButton>(_v: P0): R;
    delegate<R = MSTextHeaderInspectorItemDelegate>(): R;
    setDelegate<R = void, P0 = MSTextHeaderInspectorItemDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSTextHeaderInspectorItem<T = any> extends MSCollapsibleHeaderInspectorItem {
      alloc<R = MSTextHeaderInspectorItem>(): R;
      new: <R = MSTextHeaderInspectorItem>() => R;
    }
  }
}

declare const MSTextHeaderInspectorItem: cocoa.classes.MSTextHeaderInspectorItem;
