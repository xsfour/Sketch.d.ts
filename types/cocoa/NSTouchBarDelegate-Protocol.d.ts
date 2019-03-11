/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarDelegateProtocol<T = any> {
    touchBar_makeItemForIdentifier<R = cocoa.NSTouchBarItem, P0 = cocoa.NSTouchBar, P1 = cocoa.NSString>(_touchBar: P0, _makeItemForIdentifier: P1): R;
  }
  namespace classes {
    export interface NSTouchBarDelegateProtocol<T = any> {  }
  }
}

declare const NSTouchBarDelegateProtocol: cocoa.classes.NSTouchBarDelegateProtocol;
