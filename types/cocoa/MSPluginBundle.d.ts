/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginBundle<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    urlForResourceNamed<R = unknown, P0 = unknown>(_urlForResourceNamed: P0): R;
    writeToURL<R = boolean, P0 = unknown>(_writeToURL: P0): R;
    metadata<R = unknown>(): R;
    initWithName_identifier_commands_icon<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithName: P0, _identifier: P1, _commands: P2, _icon: P3): R;
    logErrorString<R = void, P0 = unknown>(_logErrorString: P0): R;
    initPluginBundleWithURL<R = unknown, P0 = unknown>(_initPluginBundleWithURL: P0): R;
    iconInfo<R = cocoa.MSPluginBundleIconInfo>(): R;
    setIconInfo<R = void, P0 = cocoa.MSPluginBundleIconInfo>(_v: P0): R;
    disableCocoaScriptPreprocessor<R = boolean>(): R;
    setDisableCocoaScriptPreprocessor<R = void, P0 = boolean>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    maximumCompatibleVersion<R = cocoa.NSString>(): R;
    compatibleVersion<R = cocoa.NSString>(): R;
    appcastURL<R = cocoa.NSURL>(): R;
    authorEmail<R = cocoa.NSString>(): R;
    author<R = cocoa.NSString>(): R;
    homepageURL<R = cocoa.NSURL>(): R;
    menuDescription<R = cocoa.NSDictionary>(): R;
    setMenuDescription<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    suppliesData<R = boolean>(): R;
    pluginDescription<R = cocoa.NSString>(): R;
    identifier<R = cocoa.NSString>(): R;
    name<R = cocoa.NSString>(): R;
    version<R = cocoa.NSString>(): R;
    commands<R = cocoa.NSDictionary>(): R;
    url<R = cocoa.NSURL>(): R;
    versionedIdentifier<R = cocoa.NSString>(): R;
    alertIcon<R = cocoa.NSImage>(): R;
    icon<R = cocoa.NSImage>(): R;
    compatible<R = boolean>(): R;
  }
  namespace classes {
    export interface MSPluginBundle<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPluginBundle>(): R;
      new: <R = MSPluginBundle>() => R;
      scriptDefaultTitle<R = unknown>(): R;
      commandsFromArray_sketchPluginURL_pluginBundle<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_commandsFromArray: P0, _sketchPluginURL: P1, _pluginBundle: P2): R;
      pluginBundleWithURL<R = unknown, P0 = unknown>(_pluginBundleWithURL: P0): R;
    }
  }
}

declare const MSPluginBundle: cocoa.classes.MSPluginBundle;
