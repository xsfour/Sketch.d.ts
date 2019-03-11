/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowControllerMoreIVars<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    contentViewController<R = cocoa.NSViewController>(): R;
    setContentViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    segueDestinationOptions<R = cocoa.NSDictionary>(): R;
    setSegueDestinationOptions<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    storyboard<R = cocoa.NSStoryboard>(): R;
    setStoryboard<R = void, P0 = cocoa.NSStoryboard>(_v: P0): R;
    segueTemplates<R = cocoa.NSArray>(): R;
    setSegueTemplates<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    topLevelObjectsToKeepAliveFromStoryboard<R = cocoa.NSArray>(): R;
    setTopLevelObjectsToKeepAliveFromStoryboard<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    externalObjectEntryTableForWindowLoading<R = cocoa.NSDictionary>(): R;
    setExternalObjectEntryTableForWindowLoading<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowControllerMoreIVars<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSWindowControllerMoreIVars>(): R;
      new: <R = NSWindowControllerMoreIVars>() => R;
    }
  }
}

declare const NSWindowControllerMoreIVars: cocoa.classes.NSWindowControllerMoreIVars;
