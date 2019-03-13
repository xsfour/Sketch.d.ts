/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellingPanel<T = any> extends NSPanel {
    worksWhenModal<R = boolean>(): R;
  }
  namespace classes {
    export interface NSSpellingPanel<T = any> extends NSPanel {
      alloc<R = NSSpellingPanel>(): R;
      new: <R = NSSpellingPanel>() => R;
    }
  }
}

declare const NSSpellingPanel: cocoa.classes.NSSpellingPanel;
