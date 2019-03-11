/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPDFPanel<T = any> extends cocoa.NSObject {
    beginSheetWithPDFInfo_modalForWindow_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_beginSheetWithPDFInfo: P0, _modalForWindow: P1, _completionHandler: P2): R;
    _setOKButtonDisabled<R = void, P0 = boolean>(__setOKButtonDisabled: P0): R;
    _okButtonDisabled<R = boolean>(): R;
    _setPanel<R = void, P0 = unknown>(__setPanel: P0): R;
    _panel<R = unknown>(): R;
    _setPrintInfo<R = void, P0 = unknown>(__setPrintInfo: P0): R;
    _printInfo<R = unknown>(): R;
    dealloc<R = void>(): R;
    options<R = number>(): R;
    setOptions<R = void, P0 = number>(_v: P0): R;
    accessoryController<R = cocoa.NSViewController>(): R;
    setAccessoryController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    defaultFileName<R = cocoa.NSString>(): R;
    setDefaultFileName<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSPDFPanel<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPDFPanel>(): R;
      new: <R = NSPDFPanel>() => R;
      panel<R = unknown>(): R;
    }
  }
}

declare const NSPDFPanel: cocoa.classes.NSPDFPanel;
