/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareableObjectPopUpButton<T = any> extends cocoa.NSPopUpButton, cocoa.NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    refreshIfNecessary<R = void, P0 = unknown>(_refreshIfNecessary: P0): R;
    libraryControllerDidChange<R = void, P0 = unknown>(_libraryControllerDidChange: P0): R;
    awakeFromNib<R = void>(): R;
    update<R = void>(): R;
    updateWithMenuBuilder_forLayers<R = void, P0 = unknown, P1 = unknown>(_updateWithMenuBuilder: P0, _forLayers: P1): R;
    addOriganiseMenu<R = void>(): R;
    addCreateNewMenu<R = void>(): R;
    hasLayerWithMissingFonts<R = boolean>(): R;
    addOpenLibraryMenu<R = void>(): R;
    addSyncMenu<R = void>(): R;
    addReplacementObjectsToMenu<R = void>(): R;
    addMenuItemForActionName_title<R = unknown, P0 = unknown, P1 = unknown>(_addMenuItemForActionName: P0, _title: P1): R;
    objectsAtSameLevelAsMaster<R = unknown>(): R;
    addObjectsAtSameLevelToMenu<R = void>(): R;
    addDetachMenuItem<R = void>(): R;
    addTitleMenuItem<R = void>(): R;
    containsOutOfSyncInstance<R = boolean>(): R;
    masterObjects<R = unknown>(): R;
    textStyleMenuItemSelectorDictionary<R = unknown>(): R;
    layerStyleMenuItemSelectorDictionary<R = unknown>(): R;
    symbolMenuItemSelectorDictionary<R = unknown>(): R;
    needsRebuildMenu<R = boolean>(): R;
    setNeedsRebuildMenu<R = void, P0 = boolean>(_v: P0): R;
    objectLibraryMapping<R = cocoa.NSArray>(): R;
    setObjectLibraryMapping<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    selectedObjectReference<R = cocoa.MSShareableObjectReference>(): R;
    setSelectedObjectReference<R = void, P0 = cocoa.MSShareableObjectReference>(_v: P0): R;
    layers<R = cocoa.NSArray>(): R;
    setLayers<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    menuBuilder<R = cocoa.MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = cocoa.MSForeignObjectMenuBuilder>(_v: P0): R;
    menuItemSelectorDictionary<R = cocoa.NSDictionary>(): R;
    objectType<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSShareableObjectPopUpButton<T = any> extends cocoa.classes.NSPopUpButton, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSShareableObjectPopUpButton>(): R;
      new: <R = MSShareableObjectPopUpButton>() => R;
    }
  }
}

declare const MSShareableObjectPopUpButton: cocoa.classes.MSShareableObjectPopUpButton;
