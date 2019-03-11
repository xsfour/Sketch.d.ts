/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPreferencesPluginInfo<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    pluginManager<R = unknown>(): R;
    latestPluginUpdate<R = unknown>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    dealloc<R = void>(): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    pluginBundle<R = cocoa.MSPluginBundle>(): R;
    setPluginBundle<R = void, P0 = cocoa.MSPluginBundle>(_v: P0): R;
    isUpdating<R = boolean>(): R;
    setIsUpdating<R = void, P0 = boolean>(_v: P0): R;
    updateVersionString<R = cocoa.NSString>(): R;
    isCompatible<R = boolean>(): R;
    updateAvailable<R = boolean>(): R;
    warningString<R = cocoa.NSString>(): R;
    suppliesData<R = boolean>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    pluginDescription<R = cocoa.NSString>(): R;
    namePlusAuthor<R = cocoa.NSString>(): R;
    homepage<R = cocoa.NSURL>(): R;
    version<R = cocoa.NSString>(): R;
    enableCheckboxTitle<R = cocoa.NSString>(): R;
    icon<R = cocoa.NSImage>(): R;
    attributedTitle<R = cocoa.NSAttributedString>(): R;
  }
  namespace classes {
    export interface MSPreferencesPluginInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPreferencesPluginInfo>(): R;
      new: <R = MSPreferencesPluginInfo>() => R;
      pluginInfoWithName<R = unknown, P0 = unknown>(_pluginInfoWithName: P0): R;
      pluginInfoWithPluginBundle<R = unknown, P0 = unknown>(_pluginInfoWithPluginBundle: P0): R;
    }
  }
}

declare const MSPreferencesPluginInfo: cocoa.classes.MSPreferencesPluginInfo;
