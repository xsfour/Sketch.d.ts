/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHMDMetalSessionDrawableProtocol<T = any> extends cocoa.MTLDrawableProtocol {
    debugSignpost<R = number>(): R;
    setDebugSignpost<R = void, P0 = number>(_v: P0): R;
    inputTimeStamp<R = number>(): R;
    setInputTimeStamp<R = void, P0 = number>(_v: P0): R;
    texture<R = cocoa.MTLTexture>(): R;
    session<R = cocoa.NSHMDMetalSession>(): R;
  }
  namespace classes {
    export interface NSHMDMetalSessionDrawableProtocol<T = any> extends cocoa.classes.MTLDrawableProtocol {  }
  }
}

declare const NSHMDMetalSessionDrawableProtocol: cocoa.classes.NSHMDMetalSessionDrawableProtocol;
