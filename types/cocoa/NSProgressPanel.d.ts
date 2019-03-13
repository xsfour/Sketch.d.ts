/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressPanel<T = any> extends NSPanel {
    cancelButtonPressed<R = void, P0 = unknown>(_cancelButtonPressed: P0): R;
    setCancellationDelegate_wasCancelledSelector_contextInfo<R = void, P0 = unknown, P1 = string, P2 = void>(_setCancellationDelegate: P0, _wasCancelledSelector: P1, _contextInfo: P2): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    progressIndicator<R = NSProgressIndicator>(): R;
    setProgressIndicator<R = void, P0 = NSProgressIndicator>(_v: P0): R;
    captionTextField<R = NSTextField>(): R;
    setCaptionTextField<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace classes {
    export interface NSProgressPanel<T = any> extends NSPanel {
      alloc<R = NSProgressPanel>(): R;
      new: <R = NSProgressPanel>() => R;
      progressPanelWithNibName<R = unknown, P0 = unknown>(_progressPanelWithNibName: P0): R;
    }
  }
}

declare const NSProgressPanel: cocoa.classes.NSProgressPanel;
