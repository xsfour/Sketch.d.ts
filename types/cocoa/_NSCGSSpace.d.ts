/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSSpace<T = any> extends NSCGSSpace {
    spaceID<R = number>(): R;
    initWithSpaceID<R = unknown, P0 = number>(_initWithSpaceID: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSCGSSpace<T = any> extends NSCGSSpace {
      alloc<R = _NSCGSSpace>(): R;
      new: <R = _NSCGSSpace>() => R;
    }
  }
}
