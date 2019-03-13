/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowControllerMoreIVars<T = any> extends NSObject {
    dealloc<R = void>(): R;
    contentViewController<R = NSViewController>(): R;
    setContentViewController<R = void, P0 = NSViewController>(_v: P0): R;
    segueDestinationOptions<R = NSDictionary>(): R;
    setSegueDestinationOptions<R = void, P0 = NSDictionary>(_v: P0): R;
    storyboard<R = NSStoryboard>(): R;
    setStoryboard<R = void, P0 = NSStoryboard>(_v: P0): R;
    segueTemplates<R = NSArray>(): R;
    setSegueTemplates<R = void, P0 = NSArray>(_v: P0): R;
    topLevelObjectsToKeepAliveFromStoryboard<R = NSArray>(): R;
    setTopLevelObjectsToKeepAliveFromStoryboard<R = void, P0 = NSArray>(_v: P0): R;
    externalObjectEntryTableForWindowLoading<R = NSDictionary>(): R;
    setExternalObjectEntryTableForWindowLoading<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowControllerMoreIVars<T = any> extends NSObject {
      alloc<R = NSWindowControllerMoreIVars>(): R;
      new: <R = NSWindowControllerMoreIVars>() => R;
    }
  }
}

declare const NSWindowControllerMoreIVars: cocoa.classes.NSWindowControllerMoreIVars;
