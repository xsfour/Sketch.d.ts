/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableOptionsPanel<T = any> extends cocoa.NSPanel {
    worksWhenModal<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTableOptionsPanel<T = any> extends cocoa.classes.NSPanel {
      alloc<R = NSTableOptionsPanel>(): R;
      new: <R = NSTableOptionsPanel>() => R;
    }
  }
}

declare const NSTableOptionsPanel: cocoa.classes.NSTableOptionsPanel;
