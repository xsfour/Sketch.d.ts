/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBundleResourceRequest<T = any> extends cocoa.NSObject, cocoa.NSProgressReportingProtocol {
    endAccessingResources<R = void>(): R;
    conditionallyBeginAccessingResourcesWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_conditionallyBeginAccessingResourcesWithCompletionHandler: P0): R;
    beginAccessingResourcesWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_beginAccessingResourcesWithCompletionHandler: P0): R;
    initWithTags_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithTags: P0, _bundle: P1): R;
    initWithTags<R = unknown, P0 = unknown>(_initWithTags: P0): R;
    loadingPriority<R = number>(): R;
    setLoadingPriority<R = void, P0 = number>(_v: P0): R;
    progress<R = cocoa.NSProgress>(): R;
    bundle<R = cocoa.NSBundle>(): R;
    tags<R = cocoa.NSSet>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSBundleResourceRequest<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSProgressReportingProtocol {
      alloc<R = NSBundleResourceRequest>(): R;
      new: <R = NSBundleResourceRequest>() => R;
      _assetPackBundleForBundle_withAssetPackID<R = unknown, P0 = unknown, P1 = unknown>(__assetPackBundleForBundle: P0, _withAssetPackID: P1): R;
      _addExtensionEndpoint<R = void, P0 = unknown>(__addExtensionEndpoint: P0): R;
      _extensionEndpointForMainBundleOfHostApplication<R = unknown, P0 = unknown>(__extensionEndpointForMainBundleOfHostApplication: P0): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSBundleResourceRequest: cocoa.classes.NSBundleResourceRequest;
