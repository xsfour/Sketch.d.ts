/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolInstanceOverrideInspectorItem<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem {
    libraryControllerDidChange<R = void, P0 = unknown>(_libraryControllerDidChange: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    valueFromSymbolMasterReference<R = unknown, P0 = unknown>(_valueFromSymbolMasterReference: P0): R;
    reloadMenu<R = void>(): R;
    symbolMenuItems<R = unknown>(): R;
    menuItemsForSymbolMasterRefs<R = unknown, P0 = unknown>(_menuItemsForSymbolMasterRefs: P0): R;
    nameOfCurrentNestedSymbol<R = unknown>(): R;
    menuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
    popup<R = NSPopUpButton>(): R;
    setPopup<R = void, P0 = NSPopUpButton>(_v: P0): R;
    originalMaster<R = MSSymbolMaster>(): R;
    popupButton<R = NSPopUpButton>(): R;
    setPopupButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    labelField<R = NSTextField>(): R;
    setLabelField<R = void, P0 = NSTextField>(_v: P0): R;
    firstInstance<R = MSSymbolInstance>(): R;
    originalMasterID<R = NSString>(): R;
    currentMasterID<R = NSString>(): R;
  }
  namespace MSSymbolInstanceOverrideInspectorItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSOverrideInspectorItem {
      alloc<R = MSSymbolInstanceOverrideInspectorItem>(): R;
      new: <R = MSSymbolInstanceOverrideInspectorItem>() => R;
    }
  }
}

declare const MSSymbolInstanceOverrideInspectorItem: cocoa.MSSymbolInstanceOverrideInspectorItem.CLASS;
