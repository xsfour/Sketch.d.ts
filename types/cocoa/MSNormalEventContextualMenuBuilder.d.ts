/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSNormalEventContextualMenuBuilder<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    symbolInstanceOnlyItems<R = unknown>(): R;
    symbolItems<R = unknown>(): R;
    groupOnlyItems<R = unknown>(): R;
    imageOnlyItems<R = unknown>(): R;
    textOnlyItems<R = unknown>(): R;
    noSelectionItems<R = unknown>(): R;
    distributeItems<R = unknown>(): R;
    alignItems<R = unknown>(): R;
    lockHideItems<R = unknown>(): R;
    maskItems<R = unknown>(): R;
    transformItems<R = unknown>(): R;
    groupRenameItems<R = unknown>(): R;
    pasteCopyStyleItems<R = unknown>(): R;
    moveForwardBackwardItems<R = unknown>(): R;
    pickLayerItems<R = unknown>(): R;
    cutCopyPasteItems<R = unknown>(): R;
    replaceWithSymbolItems<R = unknown>(): R;
    menuWithItemGroups<R = unknown, P0 = unknown>(_menuWithItemGroups: P0): R;
    dataFeedsItems<R = unknown>(): R;
    standardMenuItemGroups<R = unknown>(): R;
    constructMenus<R = void>(): R;
    menuForLayers<R = unknown, P0 = unknown>(_menuForLayers: P0): R;
    sliceMenu<R = cocoa.NSMenu>(): R;
    setSliceMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    artboardMenu<R = cocoa.NSMenu>(): R;
    setArtboardMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    symbolInstanceMenu<R = cocoa.NSMenu>(): R;
    setSymbolInstanceMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    imageLayerMenu<R = cocoa.NSMenu>(): R;
    setImageLayerMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    noSelectionMenu<R = cocoa.NSMenu>(): R;
    setNoSelectionMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    multipleSelectionMenu<R = cocoa.NSMenu>(): R;
    setMultipleSelectionMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    groupLayerMenu<R = cocoa.NSMenu>(): R;
    setGroupLayerMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    textLayerMenu<R = cocoa.NSMenu>(): R;
    setTextLayerMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    standardLayerMenu<R = cocoa.NSMenu>(): R;
    setStandardLayerMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
  }
  namespace classes {
    export interface MSNormalEventContextualMenuBuilder<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSNormalEventContextualMenuBuilder>(): R;
      new: <R = MSNormalEventContextualMenuBuilder>() => R;
    }
  }
}

declare const MSNormalEventContextualMenuBuilder: cocoa.classes.MSNormalEventContextualMenuBuilder;
