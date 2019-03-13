/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarProviderProtocol<T = any> extends NSObjectProtocol {
    touchBar<R = NSTouchBar>(): R;
  }
  namespace classes {
    export interface NSTouchBarProviderProtocol<T = any> extends NSObjectProtocol {  }
  }
}
