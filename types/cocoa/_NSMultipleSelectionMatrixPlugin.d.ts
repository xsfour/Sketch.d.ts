/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMultipleSelectionMatrixPlugin<T = any> extends cocoa._NSMatrixPlugin, cocoa._NSMultipleSelectionBinderPluginProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSMultipleSelectionMatrixPlugin<T = any> extends cocoa.classes._NSMatrixPlugin, cocoa.classes._NSMultipleSelectionBinderPluginProtocol {
      alloc<R = _NSMultipleSelectionMatrixPlugin>(): R;
      new: <R = _NSMultipleSelectionMatrixPlugin>() => R;
    }
  }
}
