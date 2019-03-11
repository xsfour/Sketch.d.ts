/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKWebServer<T = any> extends cocoa.NSObject, cocoa.GCDWebServerDelegateProtocol, cocoa.SMKDiskCacheDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dataFromImage<R = unknown, P0 = unknown>(_dataFromImage: P0): R;
    artboardThumbnailFromPath_constrainedToSize<R = unknown, P0 = unknown, P1 = cocoa.CGSize>(_artboardThumbnailFromPath: P0, _constrainedToSize: P1): R;
    renderedDataForExportRequest<R = unknown, P0 = unknown>(_renderedDataForExportRequest: P0): R;
    dataForExportRequest<R = unknown, P0 = unknown>(_dataForExportRequest: P0): R;
    invalidateAllArtboards<R = void>(): R;
    invalidateArtboardID<R = void, P0 = unknown>(_invalidateArtboardID: P0): R;
    cachedExportRequestsWithArtboardID<R = unknown, P0 = unknown>(_cachedExportRequestsWithArtboardID: P0): R;
    artboardResponseForRequest<R = unknown, P0 = unknown>(_artboardResponseForRequest: P0): R;
    resourceResponseForRequest<R = unknown, P0 = unknown>(_resourceResponseForRequest: P0): R;
    defaultWebServerFilePath<R = unknown>(): R;
    resourcesPath<R = unknown>(): R;
    deauthorizeAdvertisementID<R = void, P0 = unknown>(_deauthorizeAdvertisementID: P0): R;
    tokenForAdvertisementID<R = unknown, P0 = unknown>(_tokenForAdvertisementID: P0): R;
    isTokenValid<R = boolean, P0 = unknown>(_isTokenValid: P0): R;
    authorizeAdvertisementID<R = unknown, P0 = unknown>(_authorizeAdvertisementID: P0): R;
    bonjourName<R = unknown>(): R;
    stop<R = void>(): R;
    start<R = void>(): R;
    assetAccounts<R = cocoa.NSDictionary>(): R;
    setAssetAccounts<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    cachedExports<R = cocoa.NSArray>(): R;
    setCachedExports<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    diskCache<R = cocoa.SMKDiskCache>(): R;
    setDiskCache<R = void, P0 = cocoa.SMKDiskCache>(_v: P0): R;
    server<R = cocoa.GCDWebServer>(): R;
    setServer<R = void, P0 = cocoa.GCDWebServer>(_v: P0): R;
    dataSource<R = cocoa.SMKWebServerDataSource>(): R;
    setDataSource<R = void, P0 = cocoa.SMKWebServerDataSource>(_v: P0): R;
    port<R = number>(): R;
    URL<R = cocoa.NSURL>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface SMKWebServer<T = any> extends cocoa.classes.NSObject, cocoa.classes.GCDWebServerDelegateProtocol, cocoa.classes.SMKDiskCacheDelegateProtocol {
      alloc<R = SMKWebServer>(): R;
      new: <R = SMKWebServer>() => R;
    }
  }
}

declare const SMKWebServer: cocoa.classes.SMKWebServer;
