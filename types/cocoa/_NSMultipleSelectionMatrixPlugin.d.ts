/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMultipleSelectionMatrixPlugin<T = any> extends _NSMatrixPlugin, _NSMultipleSelectionBinderPluginProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSMultipleSelectionMatrixPlugin<T = any> extends _NSMatrixPlugin, _NSMultipleSelectionBinderPluginProtocol {
      alloc<R = _NSMultipleSelectionMatrixPlugin>(): R;
      new: <R = _NSMultipleSelectionMatrixPlugin>() => R;
    }
  }
}
