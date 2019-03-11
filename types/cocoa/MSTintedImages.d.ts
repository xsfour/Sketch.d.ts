/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTintedImages<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    lockImageWhenNodeIsSelected_active<R = unknown, P0 = boolean, P1 = boolean>(_lockImageWhenNodeIsSelected: P0, _active: P1): R;
    pressedLockImageWhenNodeIsSelected<R = unknown, P0 = boolean>(_pressedLockImageWhenNodeIsSelected: P0): R;
    pressedHideImageWhenNodeIsSelected<R = unknown, P0 = boolean>(_pressedHideImageWhenNodeIsSelected: P0): R;
    hideImageWhenNodeIsSelected_active<R = unknown, P0 = boolean, P1 = boolean>(_hideImageWhenNodeIsSelected: P0, _active: P1): R;
    initWithTheme<R = unknown, P0 = unknown>(_initWithTheme: P0): R;
    flowOtherPageImage<R = cocoa.NSImage>(): R;
    flowBackImage<R = cocoa.NSImage>(): R;
    pressedSelectedLockImage<R = cocoa.NSImage>(): R;
    pressedLockImage<R = cocoa.NSImage>(): R;
    unselectedLockImage<R = cocoa.NSImage>(): R;
    selectedInactiveLockImage<R = cocoa.NSImage>(): R;
    selectedActiveLockImage<R = cocoa.NSImage>(): R;
    pressedSelectedHideImage<R = cocoa.NSImage>(): R;
    pressedHideImage<R = cocoa.NSImage>(): R;
    unselectedHideImage<R = cocoa.NSImage>(): R;
    selectedInactiveHideImage<R = cocoa.NSImage>(): R;
    selectedActiveHideImage<R = cocoa.NSImage>(): R;
    sidebarExpandPageListImage<R = cocoa.NSImage>(): R;
    sidebarCollapsePageListImage<R = cocoa.NSImage>(): R;
    sidebarAddPageImage<R = cocoa.NSImage>(): R;
  }
  namespace classes {
    export interface MSTintedImages<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSTintedImages>(): R;
      new: <R = MSTintedImages>() => R;
    }
  }
}

declare const MSTintedImages: cocoa.classes.MSTintedImages;
