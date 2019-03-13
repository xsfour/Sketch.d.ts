/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowAuxiliary<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    appearanceParent<R = NSAppearanceCustomization>(): R;
    setAppearanceParent<R = void, P0 = NSAppearanceCustomization>(_v: P0): R;
    enteringFullScreen<R = boolean>(): R;
    setEnteringFullScreen<R = void, P0 = boolean>(_v: P0): R;
    animator<R = _NSWindowAnimator>(): R;
    setAnimator<R = void, P0 = _NSWindowAnimator>(_v: P0): R;
    parentWindow<R = NSWindow>(): R;
    setParentWindow<R = void, P0 = NSWindow>(_v: P0): R;
    snappingInfo<R = NSSnappingInfo>(): R;
    setSnappingInfo<R = void, P0 = NSSnappingInfo>(_v: P0): R;
    lastAppliedCollectionBehavior<R = number>(): R;
    setLastAppliedCollectionBehavior<R = void, P0 = number>(_v: P0): R;
    collectionBehavior<R = number>(): R;
    setCollectionBehavior<R = void, P0 = number>(_v: P0): R;
    tabbingMode<R = number>(): R;
    setTabbingMode<R = void, P0 = number>(_v: P0): R;
    windowLayoutsByScreenLayout<R = NSMutableDictionary>(): R;
    setWindowLayoutsByScreenLayout<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    lastDragRegionData<R = NSData>(): R;
    setLastDragRegionData<R = void, P0 = NSData>(_v: P0): R;
    cachedStandardButtons<R = NSMutableDictionary>(): R;
    setCachedStandardButtons<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    cachedShadowParameters<R = NSDictionary>(): R;
    setCachedShadowParameters<R = void, P0 = NSDictionary>(_v: P0): R;
    savedScreen<R = NSScreen>(): R;
    setSavedScreen<R = void, P0 = NSScreen>(_v: P0): R;
    contentViewController<R = NSViewController>(): R;
    setContentViewController<R = void, P0 = NSViewController>(_v: P0): R;
    windowController<R = NSWindowController>(): R;
    setWindowController<R = void, P0 = NSWindowController>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowAuxiliary<T = any> extends NSObject {
      alloc<R = NSWindowAuxiliary>(): R;
      new: <R = NSWindowAuxiliary>() => R;
    }
  }
}

declare const NSWindowAuxiliary: cocoa.classes.NSWindowAuxiliary;
