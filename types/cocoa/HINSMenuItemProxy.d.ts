/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface HINSMenuItemProxy<T = any> extends NSObject, NSValidatedUserInterfaceItemProtocol {
    initWithAction<R = unknown, P0 = string>(_initWithAction: P0): R;
    tag<R = number>(): R;
    action<R = string>(): R;
  }
  namespace classes {
    export interface HINSMenuItemProxy<T = any> extends NSObject, NSValidatedUserInterfaceItemProtocol {
      alloc<R = HINSMenuItemProxy>(): R;
      new: <R = HINSMenuItemProxy>() => R;
    }
  }
}

declare const HINSMenuItemProxy: cocoa.classes.HINSMenuItemProxy;
