/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarConfigPanel<T = any> extends cocoa.NSPanel, cocoa.NSCollectionViewDataSourceProtocol, cocoa.NSTouchBarCustomizationPaletteLayoutDelegateProtocol, cocoa.NSCollectionViewDelegateFlowLayoutProtocol, cocoa.NSCollectionViewDelegateProtocol {
    _updateTouchBarWithToolbarDisplayMode<R = void, P0 = number>(__updateTouchBarWithToolbarDisplayMode: P0): R;
    _touchBarDisplayModeChanged<R = void, P0 = unknown>(__touchBarDisplayModeChanged: P0): R;
    _setDefaultToolbarItemSetFromMenuItem<R = void, P0 = unknown>(__setDefaultToolbarItemSetFromMenuItem: P0): R;
    preventsApplicationTerminationWhenModal<R = boolean>(): R;
    _spaceNeededForPaletteLabelsOfItem_preferredWidth<R = number, P0 = unknown, P1 = number>(__spaceNeededForPaletteLabelsOfItem: P0, _preferredWidth: P1): R;
    _loadData<R = void>(): R;
    _layoutPanelAndAdjustIfNecessary<R = void>(): R;
    _loadIndividualItemsCollectionView<R = void>(): R;
    _loadDefaultSetImageRep<R = void>(): R;
    _createOffscreenDefaultImageRepSetWindow<R = unknown>(): R;
    _setUpTextField<R = void, P0 = unknown>(__setUpTextField: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    editedToolbar<R = unknown>(): R;
    _finishInitialization<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSToolbarConfigPanel<T = any> extends cocoa.classes.NSPanel, cocoa.classes.NSCollectionViewDataSourceProtocol, cocoa.classes.NSTouchBarCustomizationPaletteLayoutDelegateProtocol, cocoa.classes.NSCollectionViewDelegateFlowLayoutProtocol, cocoa.classes.NSCollectionViewDelegateProtocol {
      alloc<R = NSToolbarConfigPanel>(): R;
      new: <R = NSToolbarConfigPanel>() => R;
      toolbarConfigPanelForToolbar_withWidth<R = unknown, P0 = unknown, P1 = number>(_toolbarConfigPanelForToolbar: P0, _withWidth: P1): R;
      _nibName<R = unknown>(): R;
    }
  }
}

declare const NSToolbarConfigPanel: cocoa.classes.NSToolbarConfigPanel;
