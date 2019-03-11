/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginDebugController<T = any> extends cocoa.NSObject, cocoa.CODebugControllerProtocol {}
  namespace classes {
    export interface MSPluginDebugController<T = any> extends cocoa.classes.NSObject, cocoa.classes.CODebugControllerProtocol {
      alloc<R = MSPluginDebugController>(): R;
      new: <R = MSPluginDebugController>() => R;
    }
  }
}

declare const MSPluginDebugController: cocoa.classes.MSPluginDebugController;
