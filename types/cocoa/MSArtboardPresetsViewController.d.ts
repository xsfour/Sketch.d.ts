/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsViewController<T = any> extends cocoa.NSViewController, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.MSEditArtboardPresetViewControllerDelegateProtocol, cocoa.NSUserInterfaceValidationsProtocol, cocoa.BCPopoverDelegateProtocol {
    cxx_destruct<R = void>(): R;
    viewForGroupRow<R = unknown, P0 = number>(_viewForGroupRow: P0): R;
    deleteRowAction<R = void, P0 = unknown>(_deleteRowAction: P0): R;
    editRowAction<R = void, P0 = unknown>(_editRowAction: P0): R;
    refresh<R = void>(): R;
    isFauxSeparatorSectionAtIndex<R = boolean, P0 = number>(_isFauxSeparatorSectionAtIndex: P0): R;
    isSectionAtIndex<R = boolean, P0 = number>(_isSectionAtIndex: P0): R;
    presetForPreset_landscape<R = unknown, P0 = unknown, P1 = boolean>(_presetForPreset: P0, _landscape: P1): R;
    rearrangeObjects<R = void>(): R;
    itemIsUserPreset<R = boolean, P0 = unknown>(_itemIsUserPreset: P0): R;
    addUserPreset<R = void, P0 = unknown>(_addUserPreset: P0): R;
    presetAtIndexPath<R = unknown, P0 = unknown>(_presetAtIndexPath: P0): R;
    refreshOrientationControl<R = void>(): R;
    selectOrientation<R = void, P0 = unknown>(_selectOrientation: P0): R;
    showCreateCustomSizeSheet<R = void, P0 = unknown>(_showCreateCustomSizeSheet: P0): R;
    selectCategory<R = void, P0 = unknown>(_selectCategory: P0): R;
    categoryForPreset<R = unknown, P0 = unknown>(_categoryForPreset: P0): R;
    artboardPresetStoreDidChange<R = void, P0 = unknown>(_artboardPresetStoreDidChange: P0): R;
    editingPreset<R = cocoa.MSArtboardPreset>(): R;
    setEditingPreset<R = void, P0 = cocoa.MSArtboardPreset>(_v: P0): R;
    arrangedObjects<R = cocoa.NSArray>(): R;
    arrangedSections<R = cocoa.NSArray>(): R;
    categories<R = cocoa.NSArray>(): R;
    setCategories<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    tableView<R = cocoa.NSTableView>(): R;
    setTableView<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    orientationSegmentedControl<R = cocoa.NSSegmentedControl>(): R;
    setOrientationSegmentedControl<R = void, P0 = cocoa.NSSegmentedControl>(_v: P0): R;
    categoriesController<R = cocoa.NSArrayController>(): R;
    setCategoriesController<R = void, P0 = cocoa.NSArrayController>(_v: P0): R;
    delegate<R = cocoa.MSArtboardPresetsViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSArtboardPresetsViewControllerDelegate>(_v: P0): R;
    selectedPresetSize<R = cocoa.CGSize>(): R;
    setSelectedPresetSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    extraPresets<R = cocoa.NSArray>(): R;
    setExtraPresets<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    selectedCategory<R = cocoa.MSArtboardPresetsCategory>(): R;
    setSelectedCategory<R = void, P0 = cocoa.MSArtboardPresetsCategory>(_v: P0): R;
    presetStore<R = cocoa.MSArtboardPresetStore>(): R;
    setPresetStore<R = void, P0 = cocoa.MSArtboardPresetStore>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSArtboardPresetsViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.MSEditArtboardPresetViewControllerDelegateProtocol, cocoa.classes.NSUserInterfaceValidationsProtocol, cocoa.classes.BCPopoverDelegateProtocol {
      alloc<R = MSArtboardPresetsViewController>(): R;
      new: <R = MSArtboardPresetsViewController>() => R;
    }
  }
}

declare const MSArtboardPresetsViewController: cocoa.classes.MSArtboardPresetsViewController;
