/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionRecordTableCellView<T = any> extends cocoa.NSTableCellView, cocoa.NSPopoverDelegateProtocol {
    _save<R = void, P0 = unknown>(__save: P0): R;
    _selectActionType<R = void, P0 = unknown>(__selectActionType: P0): R;
    _add<R = void, P0 = unknown>(__add: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSActionRecordTableCellView<T = any> extends cocoa.classes.NSTableCellView, cocoa.classes.NSPopoverDelegateProtocol {
      alloc<R = _NSActionRecordTableCellView>(): R;
      new: <R = _NSActionRecordTableCellView>() => R;
    }
  }
}
