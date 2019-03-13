/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarDelegateProtocol<T = any> {
    touchBar_makeItemForIdentifier<R = NSTouchBarItem, P0 = NSTouchBar, P1 = NSString>(_touchBar: P0, _makeItemForIdentifier: P1): R;
  }
  namespace classes {
    export interface NSTouchBarDelegateProtocol<T = any> {  }
  }
}
