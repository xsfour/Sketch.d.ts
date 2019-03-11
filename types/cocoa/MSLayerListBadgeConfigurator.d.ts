/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerListBadgeConfigurator<T = any> extends cocoa.NSObject, cocoa.MSInterfaceImageOwnerProtocol, cocoa.NSMenuDelegateProtocol, cocoa.BCOutlineViewPopupConfiguratorProtocol {
    cxx_destruct<R = void>(): R;
    onBooleanOperation<R = void, P0 = unknown>(_onBooleanOperation: P0): R;
    updateImagesOnMenu_withSelectedItem<R = void, P0 = unknown, P1 = unknown>(_updateImagesOnMenu: P0, _withSelectedItem: P1): R;
    imageForOperation_withState<R = unknown, P0 = number, P1 = number>(_imageForOperation: P0, _withState: P1): R;
    badgeMenuItemWithTag<R = unknown, P0 = number>(_badgeMenuItemWithTag: P0): R;
    templateMenu<R = unknown>(): R;
    initWithLayer<R = unknown, P0 = unknown>(_initWithLayer: P0): R;
    isOpen<R = boolean>(): R;
    setIsOpen<R = void, P0 = boolean>(_v: P0): R;
    popup<R = cocoa.NSPopUpButton>(): R;
    setPopup<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    layer<R = cocoa.MSLayer>(): R;
    setLayer<R = void, P0 = cocoa.MSLayer>(_v: P0): R;
    interfaceImageIdentifier<R = cocoa.NSString>(): R;
    cacheOwner<R = unknown>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerListBadgeConfigurator<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSInterfaceImageOwnerProtocol, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.BCOutlineViewPopupConfiguratorProtocol {
      alloc<R = MSLayerListBadgeConfigurator>(): R;
      new: <R = MSLayerListBadgeConfigurator>() => R;
      configuratorWithLayer<R = unknown, P0 = unknown>(_configuratorWithLayer: P0): R;
    }
  }
}

declare const MSLayerListBadgeConfigurator: cocoa.classes.MSLayerListBadgeConfigurator;
