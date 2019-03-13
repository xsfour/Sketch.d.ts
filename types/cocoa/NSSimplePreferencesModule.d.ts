/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimplePreferencesModule<T = any> extends NSPreferencesModule {
    toolbarIcon<R = NSImage>(): R;
    setToolbarIcon<R = void, P0 = NSImage>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    rootView<R = NSBox>(): R;
    setRootView<R = void, P0 = NSBox>(_v: P0): R;
  }
  namespace classes {
    export interface NSSimplePreferencesModule<T = any> extends NSPreferencesModule {
      alloc<R = NSSimplePreferencesModule>(): R;
      new: <R = NSSimplePreferencesModule>() => R;
    }
  }
}

declare const NSSimplePreferencesModule: cocoa.classes.NSSimplePreferencesModule;
