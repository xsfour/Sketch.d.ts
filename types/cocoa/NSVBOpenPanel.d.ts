/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVBOpenPanel<T = any> extends NSVBSavePanel {
    isMovable<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    preventsApplicationTerminationWhenModal<R = boolean>(): R;
    beginForDirectory_file_types_modelessDelegate_didEndSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = string, P5 = void>(_beginForDirectory: P0, _file: P1, _types: P2, _modelessDelegate: P3, _didEndSelector: P4, _contextInfo: P5): R;
  }
  namespace classes {
    export interface NSVBOpenPanel<T = any> extends NSVBSavePanel {
      alloc<R = NSVBOpenPanel>(): R;
      new: <R = NSVBOpenPanel>() => R;
      openPanel<R = unknown>(): R;
    }
  }
}

declare const NSVBOpenPanel: cocoa.classes.NSVBOpenPanel;
