/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMissingFontsDialog<T = any> extends cocoa.NSWindowController, cocoa.NSTableViewDataSourceProtocol {
    openAnyway<R = void, P0 = unknown>(_openAnyway: P0): R;
    runPanelWithMissingFonts_savingWillChangeFonts<R = boolean, P0 = unknown, P1 = boolean>(_runPanelWithMissingFonts: P0, _savingWillChangeFonts: P1): R;
    openButton<R = cocoa.NSButton>(): R;
    setOpenButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    cancelButton<R = cocoa.NSButton>(): R;
    setCancelButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    descriptionText<R = cocoa.NSTextField>(): R;
    setDescriptionText<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    missingFonts<R = cocoa.NSArray>(): R;
    setMissingFonts<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMissingFontsDialog<T = any> extends cocoa.classes.NSWindowController, cocoa.classes.NSTableViewDataSourceProtocol {
      alloc<R = MSMissingFontsDialog>(): R;
      new: <R = MSMissingFontsDialog>() => R;
    }
  }
}

declare const MSMissingFontsDialog: cocoa.classes.MSMissingFontsDialog;
