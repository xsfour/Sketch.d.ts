/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScreenSharedInfo<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    _finishUpdating<R = void>(): R;
    _copyForUpdating<R = unknown>(): R;
    _setSystemUIOptions<R = void, P0 = number>(__setSystemUIOptions: P0): R;
    _setSystemUIMode<R = void, P0 = number>(__setSystemUIMode: P0): R;
    _setMenuBarHeight<R = void, P0 = number>(__setMenuBarHeight: P0): R;
    _setUniqueDisplays<R = void, P0 = unknown>(__setUniqueDisplays: P0): R;
    _initForUpdating<R = unknown>(): R;
    systemUIOptions<R = number>(): R;
    systemUIMode<R = number>(): R;
    menuBarHeight<R = number>(): R;
    uniqueDisplays<R = cocoa.NSArray>(): R;
    dockOrientation<R = number>(): R;
    dockRect<R = cocoa.CGRect>(): R;
    dockIsHidden<R = boolean>(): R;
    _dock<R = cocoa.NSCGSDock>(): R;
    set_dock<R = void, P0 = cocoa.NSCGSDock>(_v: P0): R;
  }
  namespace classes {
    export interface _NSScreenSharedInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSScreenSharedInfo>(): R;
      new: <R = _NSScreenSharedInfo>() => R;
    }
  }
}
