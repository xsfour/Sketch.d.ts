/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontFamilyPickerViewController<T = any> extends cocoa.NSViewController, cocoa.NSTableViewDelegateProtocol, cocoa.NSTableViewDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    doubleClickTableView<R = void, P0 = unknown>(_doubleClickTableView: P0): R;
    awakeFromNib<R = void>(): R;
    tableView<R = cocoa.NSTableView>(): R;
    setTableView<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    fontList<R = cocoa.MSFontList>(): R;
    setFontList<R = void, P0 = cocoa.MSFontList>(_v: P0): R;
    completionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSFontFamilyPickerViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.NSTableViewDataSourceProtocol {
      alloc<R = MSFontFamilyPickerViewController>(): R;
      new: <R = MSFontFamilyPickerViewController>() => R;
    }
  }
}

declare const MSFontFamilyPickerViewController: cocoa.classes.MSFontFamilyPickerViewController;
