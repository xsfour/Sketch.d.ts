/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreferencesModule<T = any> extends cocoa.NSObject, cocoa.NSPreferencesModuleProtocol {
    isResizable<R = boolean>(): R;
    setMinSize<R = void, P0 = cocoa.CGSize>(_setMinSize: P0): R;
    minSize<R = cocoa.CGSize>(): R;
    titleForIdentifier<R = unknown, P0 = unknown>(_titleForIdentifier: P0): R;
    preferencesNibName<R = unknown>(): R;
    dealloc<R = void>(): R;
    set_preferencesView<R = void, P0 = unknown>(_set_preferencesView: P0): R;
    preferencesView<R = cocoa.NSBox>(): R;
    setPreferencesView<R = void, P0 = cocoa.NSBox>(_v: P0): R;
  }
  namespace classes {
    export interface NSPreferencesModule<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSPreferencesModuleProtocol {
      alloc<R = NSPreferencesModule>(): R;
      new: <R = NSPreferencesModule>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSPreferencesModule: cocoa.classes.NSPreferencesModule;
