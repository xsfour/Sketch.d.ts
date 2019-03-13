/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableOptionsPanel<T = any> extends NSPanel {
    worksWhenModal<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTableOptionsPanel<T = any> extends NSPanel {
      alloc<R = NSTableOptionsPanel>(): R;
      new: <R = NSTableOptionsPanel>() => R;
    }
  }
}

declare const NSTableOptionsPanel: cocoa.classes.NSTableOptionsPanel;
