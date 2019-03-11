/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginVersions<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    isUpdateAvailableForVersion<R = boolean, P0 = unknown>(_isUpdateAvailableForVersion: P0): R;
    isVersionListed<R = boolean, P0 = unknown>(_isVersionListed: P0): R;
    isVersionDownloaded<R = boolean, P0 = unknown>(_isVersionDownloaded: P0): R;
    downloadURLForVersion<R = unknown, P0 = unknown>(_downloadURLForVersion: P0): R;
    addVersions<R = void, P0 = unknown>(_addVersions: P0): R;
    initWithIdentifier_appcastURL<R = unknown, P0 = unknown, P1 = unknown>(_initWithIdentifier: P0, _appcastURL: P1): R;
    _versionsDictionary<R = cocoa.NSMutableDictionary>(): R;
    appcastURL<R = cocoa.NSURL>(): R;
    identifier<R = cocoa.NSString>(): R;
    latestVersionAvailable<R = cocoa.NSString>(): R;
    versionsDictionary<R = cocoa.NSDictionary>(): R;
    versions<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSPluginVersions<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPluginVersions>(): R;
      new: <R = MSPluginVersions>() => R;
    }
  }
}

declare const MSPluginVersions: cocoa.classes.MSPluginVersions;
