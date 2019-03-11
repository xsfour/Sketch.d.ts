/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPanel<T = any> extends cocoa.NSObject {
    runModal<R = number>(): R;
    runModalWithPrintInfo<R = number, P0 = unknown>(_runModalWithPrintInfo: P0): R;
    _sheet_didEndWithResult_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(__sheet: P0, _didEndWithResult: P1, _contextInfo: P2): R;
    beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = void>(_beginSheetWithPrintInfo: P0, _modalForWindow: P1, _delegate: P2, _didEndSelector: P3, _contextInfo: P4): R;
    _optionsForShowingAsSheet<R = number, P0 = boolean>(__optionsForShowingAsSheet: P0): R;
    defaultButtonTitle<R = unknown>(): R;
    setDefaultButtonTitle<R = void, P0 = unknown>(_setDefaultButtonTitle: P0): R;
    removeAccessoryController<R = void, P0 = unknown>(_removeAccessoryController: P0): R;
    addAccessoryController<R = void, P0 = unknown>(_addAccessoryController: P0): R;
    dealloc<R = void>(): R;
    _thumbnailView<R = unknown>(): R;
    _setThumbnailView<R = void, P0 = unknown>(__setThumbnailView: P0): R;
    _runModalWithPrintInfo<R = number, P0 = unknown>(__runModalWithPrintInfo: P0): R;
    _setPreviewController<R = void, P0 = unknown>(__setPreviewController: P0): R;
    finalWritePrintInfo<R = void>(): R;
    updateFromPrintInfo<R = void>(): R;
    accessoryView<R = unknown>(): R;
    setAccessoryView<R = void, P0 = unknown>(_setAccessoryView: P0): R;
    _deprecatedFinalWritePrintInfo<R = void>(): R;
    _deprecatedUpdateFromPrintInfo<R = void>(): R;
    _deprecatedAccessoryView<R = unknown>(): R;
    _deprecatedSetAccessoryView<R = void, P0 = unknown>(__deprecatedSetAccessoryView: P0): R;
    pickedLayoutList<R = void, P0 = unknown>(_pickedLayoutList: P0): R;
    pickedButton<R = void, P0 = unknown>(_pickedButton: P0): R;
    pickedAllPages<R = void, P0 = unknown>(_pickedAllPages: P0): R;
    printInfo<R = cocoa.NSPrintInfo>(): R;
    jobStyleHint<R = cocoa.NSString>(): R;
    setJobStyleHint<R = void, P0 = cocoa.NSString>(_v: P0): R;
    helpAnchor<R = cocoa.NSString>(): R;
    setHelpAnchor<R = void, P0 = cocoa.NSString>(_v: P0): R;
    options<R = number>(): R;
    setOptions<R = void, P0 = number>(_v: P0): R;
    accessoryControllers<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSPrintPanel<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPrintPanel>(): R;
      new: <R = NSPrintPanel>() => R;
      printPanel<R = unknown>(): R;
    }
  }
}

declare const NSPrintPanel: cocoa.classes.NSPrintPanel;
