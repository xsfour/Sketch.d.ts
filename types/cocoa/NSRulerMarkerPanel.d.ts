/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerMarkerPanel<T = any> extends cocoa.NSPanel {
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
    hasShadow<R = boolean>(): R;
  }
  namespace classes {
    export interface NSRulerMarkerPanel<T = any> extends cocoa.classes.NSPanel {
      alloc<R = NSRulerMarkerPanel>(): R;
      new: <R = NSRulerMarkerPanel>() => R;
    }
  }
}

declare const NSRulerMarkerPanel: cocoa.classes.NSRulerMarkerPanel;
