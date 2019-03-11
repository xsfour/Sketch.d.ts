/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginScript<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    reload<R = void>(): R;
    loadWithError<R = boolean, P0 = unknown>(_loadWithError: P0): R;
    initWithString_filename<R = unknown, P0 = unknown, P1 = unknown>(_initWithString: P0, _filename: P1): R;
    initWithURL_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithURL: P0, _error: P1): R;
    script<R = cocoa.NSString>(): R;
    filename<R = cocoa.NSString>(): R;
    URL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface MSPluginScript<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPluginScript>(): R;
      new: <R = MSPluginScript>() => R;
    }
  }
}

declare const MSPluginScript: cocoa.classes.MSPluginScript;
