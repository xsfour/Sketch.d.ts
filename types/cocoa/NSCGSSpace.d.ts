/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCGSSpace<T = any> extends cocoa.NSObject {
    setMenuBarCompanionWindow_offset<R = void, P0 = number, P1 = number>(_setMenuBarCompanionWindow: P0, _offset: P1): R;
    finishedResizeForRect_ackImmediately<R = void, P0 = cocoa.CGRect, P1 = boolean>(_finishedResizeForRect: P0, _ackImmediately: P1): R;
    spaceID<R = number>(): R;
  }
  namespace classes {
    export interface NSCGSSpace<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSCGSSpace>(): R;
      new: <R = NSCGSSpace>() => R;
      spaceWithSpaceID<R = unknown, P0 = number>(_spaceWithSpaceID: P0): R;
      currentManagedSpaces<R = unknown>(): R;
      allManagedSpaces<R = unknown>(): R;
    }
  }
}

declare const NSCGSSpace: cocoa.classes.NSCGSSpace;
