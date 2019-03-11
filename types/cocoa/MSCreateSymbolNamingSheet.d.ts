/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateSymbolNamingSheet<T = any> extends cocoa.CHSheetController {
    validateConfirmButton<R = void>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    setShouldShowMoveCheckbox<R = void, P0 = boolean>(_setShouldShowMoveCheckbox: P0): R;
    setSuggestedName<R = void, P0 = unknown>(_setSuggestedName: P0): R;
    setSymbolPageName<R = void, P0 = unknown>(_setSymbolPageName: P0): R;
    awakeFromNib<R = void>(): R;
    completionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    symbolPageField<R = cocoa.NSTextField>(): R;
    setSymbolPageField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    symbolNameField<R = cocoa.NSTextField>(): R;
    setSymbolNameField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    confirmButton<R = cocoa.NSButton>(): R;
    setConfirmButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    moveSymbolToPageCheckbox<R = cocoa.NSButton>(): R;
    setMoveSymbolToPageCheckbox<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSCreateSymbolNamingSheet<T = any> extends cocoa.classes.CHSheetController {
      alloc<R = MSCreateSymbolNamingSheet>(): R;
      new: <R = MSCreateSymbolNamingSheet>() => R;
    }
  }
}

declare const MSCreateSymbolNamingSheet: cocoa.classes.MSCreateSymbolNamingSheet;
