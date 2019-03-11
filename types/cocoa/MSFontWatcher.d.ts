/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontWatcher<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    installedFontsChanged<R = void, P0 = unknown>(_installedFontsChanged: P0): R;
    dealloc<R = void>(): R;
    initWithDocumentController<R = unknown, P0 = unknown>(_initWithDocumentController: P0): R;
    documentController<R = cocoa.NSDocumentController>(): R;
    setDocumentController<R = void, P0 = cocoa.NSDocumentController>(_v: P0): R;
  }
  namespace classes {
    export interface MSFontWatcher<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSFontWatcher>(): R;
      new: <R = MSFontWatcher>() => R;
    }
  }
}

declare const MSFontWatcher: cocoa.classes.MSFontWatcher;
