/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewSectionLayoutItemDescription<T = any> extends cocoa.NSObject, cocoa._NSTouchBarItemLayoutWrapperProtocol {
    dealloc<R = void>(): R;
    backupDragSize<R = cocoa.CGSize>(): R;
    setBackupDragSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    itemPosition<R = number>(): R;
    setItemPosition<R = void, P0 = number>(_v: P0): R;
    priorityIndex<R = number>(): R;
    setPriorityIndex<R = void, P0 = number>(_v: P0): R;
    showsAppState<R = boolean>(): R;
    setShowsAppState<R = void, P0 = boolean>(_v: P0): R;
    itemState<R = number>(): R;
    setItemState<R = void, P0 = number>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    stacked<R = boolean>(): R;
    setStacked<R = void, P0 = boolean>(_v: P0): R;
    dragAnchorPoint<R = cocoa.CGPoint>(): R;
    setDragAnchorPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    dragPosition<R = cocoa.CGPoint>(): R;
    setDragPosition<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    centered<R = boolean>(): R;
    setCentered<R = void, P0 = boolean>(_v: P0): R;
    isSpace<R = boolean>(): R;
    setIsSpace<R = void, P0 = boolean>(_v: P0): R;
    contentClippingSize<R = cocoa.CGSize>(): R;
    setContentClippingSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    maxSize<R = cocoa.CGSize>(): R;
    setMaxSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    preferredSize<R = cocoa.CGSize>(): R;
    setPreferredSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    minSize<R = cocoa.CGSize>(): R;
    setMinSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    dragging<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    preferredTrailingPosition<R = number>(): R;
    preferredZOrder<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarCustomizationPreviewSectionLayoutItemDescription<T = any> extends cocoa.classes.NSObject, cocoa.classes._NSTouchBarItemLayoutWrapperProtocol {
      alloc<R = NSTouchBarCustomizationPreviewSectionLayoutItemDescription>(): R;
      new: <R = NSTouchBarCustomizationPreviewSectionLayoutItemDescription>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewSectionLayoutItemDescription: cocoa.classes.NSTouchBarCustomizationPreviewSectionLayoutItemDescription;
