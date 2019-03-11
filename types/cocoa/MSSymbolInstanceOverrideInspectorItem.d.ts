/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolInstanceOverrideInspectorItem<T = any> extends cocoa.MSOverrideInspectorItem {
    libraryControllerDidChange<R = void, P0 = unknown>(_libraryControllerDidChange: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    valueFromSymbolMasterReference<R = unknown, P0 = unknown>(_valueFromSymbolMasterReference: P0): R;
    reloadMenu<R = void>(): R;
    symbolMenuItems<R = unknown>(): R;
    menuItemsForSymbolMasterRefs<R = unknown, P0 = unknown>(_menuItemsForSymbolMasterRefs: P0): R;
    nameOfCurrentNestedSymbol<R = unknown>(): R;
    menuBuilder<R = cocoa.MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = cocoa.MSForeignObjectMenuBuilder>(_v: P0): R;
    popup<R = cocoa.NSPopUpButton>(): R;
    setPopup<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    originalMaster<R = cocoa.MSSymbolMaster>(): R;
    popupButton<R = cocoa.NSPopUpButton>(): R;
    setPopupButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    labelField<R = cocoa.NSTextField>(): R;
    setLabelField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    firstInstance<R = cocoa.MSSymbolInstance>(): R;
    originalMasterID<R = cocoa.NSString>(): R;
    currentMasterID<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSSymbolInstanceOverrideInspectorItem<T = any> extends cocoa.classes.MSOverrideInspectorItem {
      alloc<R = MSSymbolInstanceOverrideInspectorItem>(): R;
      new: <R = MSSymbolInstanceOverrideInspectorItem>() => R;
    }
  }
}

declare const MSSymbolInstanceOverrideInspectorItem: cocoa.classes.MSSymbolInstanceOverrideInspectorItem;
