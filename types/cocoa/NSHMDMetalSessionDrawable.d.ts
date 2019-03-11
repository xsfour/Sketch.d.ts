/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDMetalSessionDrawable<T = any> extends cocoa.NSObject, cocoa.NSHMDMetalSessionDrawableProtocol {
    presentAtTimestamp<R = void, P0 = number>(_presentAtTimestamp: P0): R;
    dealloc<R = void>(): R;
    initWithSession_surfaceDrawable<R = unknown, P0 = unknown, P1 = unknown>(_initWithSession: P0, _surfaceDrawable: P1): R;
    texture<R = cocoa.MTLTexture>(): R;
    debugSignpost<R = number>(): R;
    setDebugSignpost<R = void, P0 = number>(_v: P0): R;
    inputTimeStamp<R = number>(): R;
    setInputTimeStamp<R = void, P0 = number>(_v: P0): R;
    session<R = cocoa.NSHMDMetalSession>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSHMDMetalSessionDrawable<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSHMDMetalSessionDrawableProtocol {
      alloc<R = NSHMDMetalSessionDrawable>(): R;
      new: <R = NSHMDMetalSessionDrawable>() => R;
    }
  }
}

declare const NSHMDMetalSessionDrawable: cocoa.classes.NSHMDMetalSessionDrawable;
