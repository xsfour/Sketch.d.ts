/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPageLayout<T = any> extends cocoa.NSObject {
    runModal<R = number>(): R;
    runModalWithPrintInfo<R = number, P0 = unknown>(_runModalWithPrintInfo: P0): R;
    _sheet_didEndWithResult_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(__sheet: P0, _didEndWithResult: P1, _contextInfo: P2): R;
    beginSheetWithPrintInfo_modalForWindow_delegate_didEndSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = void>(_beginSheetWithPrintInfo: P0, _modalForWindow: P1, _delegate: P2, _didEndSelector: P3, _contextInfo: P4): R;
    removeAccessoryController<R = void, P0 = unknown>(_removeAccessoryController: P0): R;
    addAccessoryController<R = void, P0 = unknown>(_addAccessoryController: P0): R;
    dealloc<R = void>(): R;
    writePrintInfo<R = void>(): R;
    readPrintInfo<R = void>(): R;
    accessoryView<R = unknown>(): R;
    setAccessoryView<R = void, P0 = unknown>(_setAccessoryView: P0): R;
    _deprecatedWritePrintInfo<R = void>(): R;
    _deprecatedReadPrintInfo<R = void>(): R;
    pickedUnits<R = void, P0 = unknown>(_pickedUnits: P0): R;
    pickedPaperSize<R = void, P0 = unknown>(_pickedPaperSize: P0): R;
    pickedOrientation<R = void, P0 = unknown>(_pickedOrientation: P0): R;
    pickedButton<R = void, P0 = unknown>(_pickedButton: P0): R;
    convertOldFactor_newFactor<R = void, P0 = number, P1 = number>(_convertOldFactor: P0, _newFactor: P1): R;
    printInfo<R = cocoa.NSPrintInfo>(): R;
    accessoryControllers<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSPageLayout<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPageLayout>(): R;
      new: <R = NSPageLayout>() => R;
      pageLayout<R = unknown>(): R;
    }
  }
}

declare const NSPageLayout: cocoa.classes.NSPageLayout;
