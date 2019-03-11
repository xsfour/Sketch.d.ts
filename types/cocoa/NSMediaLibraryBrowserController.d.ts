/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMediaLibraryBrowserController<T = any> extends cocoa.NSObject {
    orderOut<R = void, P0 = unknown>(_orderOut: P0): R;
    orderFront<R = void, P0 = unknown>(_orderFront: P0): R;
    togglePanel<R = void, P0 = unknown>(_togglePanel: P0): R;
    setFrameAutosaveName<R = void, P0 = unknown>(_setFrameAutosaveName: P0): R;
    frameAutosaveName<R = unknown>(): R;
    dealloc<R = void>(): R;
    browserProxy<R = cocoa.PBOXRemoteMediaBrowserPanel>(): R;
    visible<R = boolean>(): R;
    setVisible<R = void, P0 = boolean>(_v: P0): R;
    mediaLibraries<R = number>(): R;
    setMediaLibraries<R = void, P0 = number>(_v: P0): R;
    frame<R = cocoa.CGRect>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface NSMediaLibraryBrowserController<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSMediaLibraryBrowserController>(): R;
      new: <R = NSMediaLibraryBrowserController>() => R;
      mediaTypeEnumForMask<R = number, P0 = number>(_mediaTypeEnumForMask: P0): R;
      maskForMediaTypeEnum<R = number, P0 = number>(_maskForMediaTypeEnum: P0): R;
      sharedMediaLibraryBrowserController<R = unknown>(): R;
    }
  }
}

declare const NSMediaLibraryBrowserController: cocoa.classes.NSMediaLibraryBrowserController;
