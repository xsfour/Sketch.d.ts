/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMissingFontsDialog<T = any> extends NSWindowController, NSTableViewDataSourceProtocol {
    openAnyway<R = void, P0 = unknown>(_openAnyway: P0): R;
    runPanelWithMissingFonts_savingWillChangeFonts<R = boolean, P0 = unknown, P1 = boolean>(_runPanelWithMissingFonts: P0, _savingWillChangeFonts: P1): R;
    openButton<R = NSButton>(): R;
    setOpenButton<R = void, P0 = NSButton>(_v: P0): R;
    cancelButton<R = NSButton>(): R;
    setCancelButton<R = void, P0 = NSButton>(_v: P0): R;
    descriptionText<R = NSTextField>(): R;
    setDescriptionText<R = void, P0 = NSTextField>(_v: P0): R;
    missingFonts<R = NSArray>(): R;
    setMissingFonts<R = void, P0 = NSArray>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMissingFontsDialog<T = any> extends NSWindowController, NSTableViewDataSourceProtocol {
      alloc<R = MSMissingFontsDialog>(): R;
      new: <R = MSMissingFontsDialog>() => R;
    }
  }
}

declare const MSMissingFontsDialog: cocoa.classes.MSMissingFontsDialog;
