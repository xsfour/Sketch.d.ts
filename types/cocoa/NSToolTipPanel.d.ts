/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolTipPanel<T = any> extends cocoa.NSPanel {
    _setLevelToShowAboveWindow<R = void, P0 = unknown>(__setLevelToShowAboveWindow: P0): R;
    canBecomeVisibleWithoutLogin<R = boolean>(): R;
    setToolTipString<R = void, P0 = unknown>(_setToolTipString: P0): R;
    toolTipString<R = unknown>(): R;
    hasShadow<R = boolean>(): R;
  }
  namespace classes {
    export interface NSToolTipPanel<T = any> extends cocoa.classes.NSPanel {
      alloc<R = NSToolTipPanel>(): R;
      new: <R = NSToolTipPanel>() => R;
    }
  }
}

declare const NSToolTipPanel: cocoa.classes.NSToolTipPanel;
