/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSActionBinderPluginProtocol<T = any> extends _NSEditorBinderPluginProtocol {
    invokeSelector_withArguments_forBinding_object<R = boolean, P0 = string, P1 = NSArray, P2 = NSString, P3 = unknown>(_invokeSelector: P0, _withArguments: P1, _forBinding: P2, _object: P3): R;
    targetAndArgumentsAcceptableForPerformAction<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSActionBinderPluginProtocol<T = any> extends _NSEditorBinderPluginProtocol {  }
  }
}
