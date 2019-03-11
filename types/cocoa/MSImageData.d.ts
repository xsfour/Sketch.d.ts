/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageData<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.MSCodingProtocol, cocoa.MSJSONArchiverAlternativeFileReferenceProtocol {
    cxx_destruct<R = void>(): R;
    CGImageAtLevelOfDetail<R = cocoa.CGImage, P0 = number>(_CGImageAtLevelOfDetail: P0): R;
    generateCGImageAtLevelOfDetail<R = cocoa.CGImage, P0 = number>(_generateCGImageAtLevelOfDetail: P0): R;
    CGImageSuitableForDrawingWithSize<R = cocoa.CGImage, P0 = cocoa.CGSize>(_CGImageSuitableForDrawingWithSize: P0): R;
    correctInvalidGamma<R = void>(): R;
    replacementObjectForJSONEncoder<R = unknown, P0 = unknown>(_replacementObjectForJSONEncoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    isAssetEqual<R = boolean, P0 = unknown>(_isAssetEqual: P0): R;
    assetType<R = number>(): R;
    decodeWithUnarchiver<R = void, P0 = unknown>(_decodeWithUnarchiver: P0): R;
    NSImage<R = unknown>(): R;
    isLegacy<R = boolean>(): R;
    setSha1<R = void, P0 = unknown>(_setSha1: P0): R;
    setData<R = void, P0 = unknown>(_setData: P0): R;
    waitForDataLock<R = void>(): R;
    dealloc<R = void>(): R;
    initWithLegacyHash<R = unknown, P0 = unknown>(_initWithLegacyHash: P0): R;
    initWithData_sha<R = unknown, P0 = unknown, P1 = unknown>(_initWithData: P0, _sha: P1): R;
    initWithImage<R = unknown, P0 = unknown>(_initWithImage: P0): R;
    initDefault<R = unknown>(): R;
    treeAsDictionary<R = unknown>(): R;
    imageLock<R = cocoa.BCReadWriteLock>(): R;
    dataLock<R = cocoa.OS_dispatch_semaphore>(): R;
    image<R = cocoa.NSImage>(): R;
    setImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    cgImage<R = cocoa.CGImage>(): R;
    hash<R = number>(): R;
    archiveReferenceIdentifier_bc<R = cocoa.NSString>(): R;
    sha1<R = cocoa.NSData>(): R;
    data<R = cocoa.NSData>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSImageData<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.MSCodingProtocol, cocoa.classes.MSJSONArchiverAlternativeFileReferenceProtocol {
      alloc<R = MSImageData>(): R;
      new: <R = MSImageData>() => R;
      errorImage<R = unknown>(): R;
    }
  }
}

declare const MSImageData: cocoa.classes.MSImageData;
