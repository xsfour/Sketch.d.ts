/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSimplePreferencesModule<T = any> extends cocoa.NSPreferencesModule {
    toolbarIcon<R = cocoa.NSImage>(): R;
    setToolbarIcon<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    rootView<R = cocoa.NSBox>(): R;
    setRootView<R = void, P0 = cocoa.NSBox>(_v: P0): R;
  }
  namespace classes {
    export interface NSSimplePreferencesModule<T = any> extends cocoa.classes.NSPreferencesModule {
      alloc<R = NSSimplePreferencesModule>(): R;
      new: <R = NSSimplePreferencesModule>() => R;
    }
  }
}

declare const NSSimplePreferencesModule: cocoa.classes.NSSimplePreferencesModule;
