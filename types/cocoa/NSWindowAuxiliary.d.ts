/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowAuxiliary<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    appearanceParent<R = cocoa.NSAppearanceCustomization>(): R;
    setAppearanceParent<R = void, P0 = cocoa.NSAppearanceCustomization>(_v: P0): R;
    enteringFullScreen<R = boolean>(): R;
    setEnteringFullScreen<R = void, P0 = boolean>(_v: P0): R;
    animator<R = cocoa._NSWindowAnimator>(): R;
    setAnimator<R = void, P0 = cocoa._NSWindowAnimator>(_v: P0): R;
    parentWindow<R = cocoa.NSWindow>(): R;
    setParentWindow<R = void, P0 = cocoa.NSWindow>(_v: P0): R;
    snappingInfo<R = cocoa.NSSnappingInfo>(): R;
    setSnappingInfo<R = void, P0 = cocoa.NSSnappingInfo>(_v: P0): R;
    lastAppliedCollectionBehavior<R = number>(): R;
    setLastAppliedCollectionBehavior<R = void, P0 = number>(_v: P0): R;
    collectionBehavior<R = number>(): R;
    setCollectionBehavior<R = void, P0 = number>(_v: P0): R;
    tabbingMode<R = number>(): R;
    setTabbingMode<R = void, P0 = number>(_v: P0): R;
    windowLayoutsByScreenLayout<R = cocoa.NSMutableDictionary>(): R;
    setWindowLayoutsByScreenLayout<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    lastDragRegionData<R = cocoa.NSData>(): R;
    setLastDragRegionData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    cachedStandardButtons<R = cocoa.NSMutableDictionary>(): R;
    setCachedStandardButtons<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    cachedShadowParameters<R = cocoa.NSDictionary>(): R;
    setCachedShadowParameters<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    savedScreen<R = cocoa.NSScreen>(): R;
    setSavedScreen<R = void, P0 = cocoa.NSScreen>(_v: P0): R;
    contentViewController<R = cocoa.NSViewController>(): R;
    setContentViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    windowController<R = cocoa.NSWindowController>(): R;
    setWindowController<R = void, P0 = cocoa.NSWindowController>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSWindowAuxiliary>(): R;
      new: <R = NSWindowAuxiliary>() => R;
    }
  }
}

declare const NSWindowAuxiliary: cocoa.classes.NSWindowAuxiliary;
