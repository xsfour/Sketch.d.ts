/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataMenuProvider<T = any> extends cocoa.NSObject, cocoa.NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    pluginKeysDictionaryFromDataSuppliers<R = unknown, P0 = unknown>(_pluginKeysDictionaryFromDataSuppliers: P0): R;
    pluginNameForIdentifier<R = unknown, P0 = unknown>(_pluginNameForIdentifier: P0): R;
    sortedMenuItems<R = unknown, P0 = unknown>(_sortedMenuItems: P0): R;
    dataSuppliersForDataType<R = unknown, P0 = number>(_dataSuppliersForDataType: P0): R;
    dataSupplierGroupsForDataSuppliers<R = unknown, P0 = unknown>(_dataSupplierGroupsForDataSuppliers: P0): R;
    menuItemForDataSupplier_indentationLevel<R = unknown, P0 = unknown, P1 = number>(_menuItemForDataSupplier: P0, _indentationLevel: P1): R;
    addCheckMarkToMenuItems_dataIdentifier<R = number, P0 = unknown, P1 = unknown>(_addCheckMarkToMenuItems: P0, _dataIdentifier: P1): R;
    menuItemsInGroup_forDataSuppliers<R = unknown, P0 = unknown, P1 = unknown>(_menuItemsInGroup: P0, _forDataSuppliers: P1): R;
    menuItemsForDataSuppliers_indentationLevel<R = unknown, P0 = unknown, P1 = number>(_menuItemsForDataSuppliers: P0, _indentationLevel: P1): R;
    menuItemsForDataType_indentationLevel<R = unknown, P0 = number, P1 = number>(_menuItemsForDataType: P0, _indentationLevel: P1): R;
    menuItemsForPluginDataSuppliers_indentationLevel<R = unknown, P0 = unknown, P1 = number>(_menuItemsForPluginDataSuppliers: P0, _indentationLevel: P1): R;
    menuItemsForGroups_indentationLevel<R = unknown, P0 = unknown, P1 = number>(_menuItemsForGroups: P0, _indentationLevel: P1): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    menuItemAction<R = void, P0 = unknown>(_menuItemAction: P0): R;
    shadowImageFromImage<R = unknown, P0 = unknown>(_shadowImageFromImage: P0): R;
    addImageToMenuItems<R = unknown, P0 = unknown>(_addImageToMenuItems: P0): R;
    addDataSuppliersForType_toMenu_typeTitle<R = boolean, P0 = number, P1 = unknown, P2 = unknown>(_addDataSuppliersForType: P0, _toMenu: P1, _typeTitle: P2): R;
    updateMenu<R = void, P0 = unknown>(_updateMenu: P0): R;
    updateOverridesMenu<R = void, P0 = unknown>(_updateOverridesMenu: P0): R;
    refreshDataMenuItemsWithOverridesMenu_displayKeyboardShortcuts<R = unknown, P0 = boolean, P1 = boolean>(_refreshDataMenuItemsWithOverridesMenu: P0, _displayKeyboardShortcuts: P1): R;
    clearDataMenuItem<R = unknown>(): R;
    overridesMenu<R = unknown>(): R;
    menu<R = unknown>(): R;
    initWithDataManager<R = unknown, P0 = unknown>(_initWithDataManager: P0): R;
    delegate<R = cocoa.MSDataMenuProviderDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSDataMenuProviderDelegate>(_v: P0): R;
    dataManager<R = cocoa.MSDataSupplierManager>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDataMenuProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSDataMenuProvider>(): R;
      new: <R = MSDataMenuProvider>() => R;
    }
  }
}

declare const MSDataMenuProvider: cocoa.classes.MSDataMenuProvider;
