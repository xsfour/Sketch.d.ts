/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginStandaloneScript<T = any> extends cocoa.MSPluginScript {
    script<R = unknown>(): R;
    wrappedScript<R = cocoa.NSString>(): R;
    setWrappedScript<R = void, P0 = cocoa.NSString>(_v: P0): R;
    handler<R = cocoa.NSString>(): R;
    rawScript<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSPluginStandaloneScript<T = any> extends cocoa.classes.MSPluginScript {
      alloc<R = MSPluginStandaloneScript>(): R;
      new: <R = MSPluginStandaloneScript>() => R;
      wrappedScript_handler<R = unknown, P0 = unknown, P1 = unknown>(_wrappedScript: P0, _handler: P1): R;
    }
  }
}

declare const MSPluginStandaloneScript: cocoa.classes.MSPluginStandaloneScript;
