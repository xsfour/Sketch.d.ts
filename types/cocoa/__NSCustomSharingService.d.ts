/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSCustomSharingService<T = any> extends NSSharingService {
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface __NSCustomSharingService<T = any> extends NSSharingService {
      alloc<R = __NSCustomSharingService>(): R;
      new: <R = __NSCustomSharingService>() => R;
    }
  }
}
