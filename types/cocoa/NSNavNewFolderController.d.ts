/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavNewFolderController<T = any> extends cocoa.NSWindowController {
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    runModalForSavePanel<R = unknown, P0 = unknown>(_runModalForSavePanel: P0): R;
    isRunning<R = boolean>(): R;
    _defaultNewFolderName<R = unknown>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    _updateOkButtonEnabledStateAndErrorMessage<R = void>(): R;
    _folderPath<R = unknown>(): R;
  }
  namespace classes {
    export interface NSNavNewFolderController<T = any> extends cocoa.classes.NSWindowController {
      alloc<R = NSNavNewFolderController>(): R;
      new: <R = NSNavNewFolderController>() => R;
    }
  }
}

declare const NSNavNewFolderController: cocoa.classes.NSNavNewFolderController;
