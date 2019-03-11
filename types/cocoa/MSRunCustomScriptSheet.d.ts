/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRunCustomScriptSheet<T = any> extends cocoa.CHSheetController, cocoa.NSTextViewDelegateProtocol {
    redoAction<R = void, P0 = unknown>(_redoAction: P0): R;
    undoAction<R = void, P0 = unknown>(_undoAction: P0): R;
    scriptingMenuAction<R = void, P0 = unknown>(_scriptingMenuAction: P0): R;
    commentSelection<R = void, P0 = unknown>(_commentSelection: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    saveAction<R = void, P0 = unknown>(_saveAction: P0): R;
    showHelp<R = void, P0 = unknown>(_showHelp: P0): R;
    runScript<R = void, P0 = unknown>(_runScript: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    commandToRunWithName<R = unknown, P0 = unknown>(_commandToRunWithName: P0): R;
    awakeFromNib<R = void>(): R;
    touchBarRun<R = cocoa.NSButton>(): R;
    setTouchBarRun<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    touchBarSave<R = cocoa.NSButton>(): R;
    setTouchBarSave<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    undoManager<R = cocoa.NSUndoManager>(): R;
    setUndoManager<R = void, P0 = cocoa.NSUndoManager>(_v: P0): R;
    logField<R = cocoa.NSTextView>(): R;
    setLogField<R = void, P0 = cocoa.NSTextView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSRunCustomScriptSheet<T = any> extends cocoa.classes.CHSheetController, cocoa.classes.NSTextViewDelegateProtocol {
      alloc<R = MSRunCustomScriptSheet>(): R;
      new: <R = MSRunCustomScriptSheet>() => R;
    }
  }
}

declare const MSRunCustomScriptSheet: cocoa.classes.MSRunCustomScriptSheet;
