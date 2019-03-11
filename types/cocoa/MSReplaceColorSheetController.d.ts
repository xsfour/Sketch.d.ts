/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceColorSheetController<T = any> extends cocoa.CHSheetController, cocoa.NSWindowDelegateProtocol, cocoa.NSMenuDelegateProtocol, cocoa.MSColorInspectorDelegateProtocol {
    disableUI<R = void>(): R;
    validateUI<R = void>(): R;
    validateReplaceButton<R = void>(): R;
    pickReplacementColor<R = void, P0 = unknown>(_pickReplacementColor: P0): R;
    dismissReplacementColorPopover<R = boolean>(): R;
    validateReplacementColorButton<R = void>(): R;
    setOriginalColor<R = void, P0 = unknown>(_setOriginalColor: P0): R;
    commitOriginalColor<R = void, P0 = unknown>(_commitOriginalColor: P0): R;
    pickOriginalColor<R = void, P0 = unknown>(_pickOriginalColor: P0): R;
    validateOriginalColorButton<R = void>(): R;
    refreshOriginalColorButtonFromSelection<R = void>(): R;
    updateFrequentColorsMenu<R = void>(): R;
    toggleIgnoreAlpha<R = void, P0 = unknown>(_toggleIgnoreAlpha: P0): R;
    currentDocument<R = unknown>(): R;
    popover<R = cocoa.BCPopover>(): R;
    setPopover<R = void, P0 = cocoa.BCPopover>(_v: P0): R;
    frequentColorsMenu<R = cocoa.NSMenu>(): R;
    setFrequentColorsMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    replaceButton<R = cocoa.NSButton>(): R;
    setReplaceButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    replacementColorPopoverDismissingView<R = cocoa.MSPopoverDismisserView>(): R;
    setReplacementColorPopoverDismissingView<R = void, P0 = cocoa.MSPopoverDismisserView>(_v: P0): R;
    keepAlphaOfOriginalColorButton<R = cocoa.NSButton>(): R;
    setKeepAlphaOfOriginalColorButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    replacementColorButton<R = cocoa.MSStylePartPreviewButton>(): R;
    setReplacementColorButton<R = void, P0 = cocoa.MSStylePartPreviewButton>(_v: P0): R;
    originalColorButton<R = cocoa.MSStylePartPreviewButton>(): R;
    setOriginalColorButton<R = void, P0 = cocoa.MSStylePartPreviewButton>(_v: P0): R;
    ignoreAlphaWhenMatchingOriginalColorButton<R = cocoa.NSButton>(): R;
    setIgnoreAlphaWhenMatchingOriginalColorButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    cancelButton<R = cocoa.NSButton>(): R;
    setCancelButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSReplaceColorSheetController<T = any> extends cocoa.classes.CHSheetController, cocoa.classes.NSWindowDelegateProtocol, cocoa.classes.NSMenuDelegateProtocol, cocoa.classes.MSColorInspectorDelegateProtocol {
      alloc<R = MSReplaceColorSheetController>(): R;
      new: <R = MSReplaceColorSheetController>() => R;
    }
  }
}

declare const MSReplaceColorSheetController: cocoa.classes.MSReplaceColorSheetController;
