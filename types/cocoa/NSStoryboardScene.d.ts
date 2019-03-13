/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardScene<T = any> extends NSObject {
    dealloc<R = void>(): R;
    sceneController<R = unknown>(): R;
    setSceneController<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSStoryboardScene<T = any> extends NSObject {
      alloc<R = NSStoryboardScene>(): R;
      new: <R = NSStoryboardScene>() => R;
    }
  }
}

declare const NSStoryboardScene: cocoa.classes.NSStoryboardScene;
