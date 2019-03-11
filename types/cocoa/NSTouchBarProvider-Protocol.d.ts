/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarProviderProtocol<T = any> extends cocoa.NSObjectProtocol {
    touchBar<R = cocoa.NSTouchBar>(): R;
  }
  namespace classes {
    export interface NSTouchBarProviderProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarProviderProtocol: cocoa.classes.NSTouchBarProviderProtocol;
