/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardSeguePresentedControllerCenter<T = any> extends cocoa.NSObject {
    controllerWithIdentifier<R = unknown, P0 = unknown>(_controllerWithIdentifier: P0): R;
    unregisterControllerWithOptions<R = void, P0 = unknown>(_unregisterControllerWithOptions: P0): R;
    registerController_withOptions<R = void, P0 = unknown, P1 = unknown>(_registerController: P0, _withOptions: P1): R;
    dealloc<R = void>(): R;
    registeredControllers<R = cocoa.NSMapTable>(): R;
    setRegisteredControllers<R = void, P0 = cocoa.NSMapTable>(_v: P0): R;
  }
  namespace classes {
    export interface NSStoryboardSeguePresentedControllerCenter<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSStoryboardSeguePresentedControllerCenter>(): R;
      new: <R = NSStoryboardSeguePresentedControllerCenter>() => R;
      defaultCenter<R = unknown>(): R;
    }
  }
}

declare const NSStoryboardSeguePresentedControllerCenter: cocoa.classes.NSStoryboardSeguePresentedControllerCenter;
