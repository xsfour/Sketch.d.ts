/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreferencesModule<T = any> extends NSObject, NSPreferencesModuleProtocol {
    isResizable<R = boolean>(): R;
    setMinSize<R = void, P0 = CGSize>(_setMinSize: P0): R;
    minSize<R = CGSize>(): R;
    titleForIdentifier<R = unknown, P0 = unknown>(_titleForIdentifier: P0): R;
    preferencesNibName<R = unknown>(): R;
    dealloc<R = void>(): R;
    set_preferencesView<R = void, P0 = unknown>(_set_preferencesView: P0): R;
    preferencesView<R = NSBox>(): R;
    setPreferencesView<R = void, P0 = NSBox>(_v: P0): R;
  }
  namespace classes {
    export interface NSPreferencesModule<T = any> extends NSObject, NSPreferencesModuleProtocol {
      alloc<R = NSPreferencesModule>(): R;
      new: <R = NSPreferencesModule>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSPreferencesModule: cocoa.classes.NSPreferencesModule;
