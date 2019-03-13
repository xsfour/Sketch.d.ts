/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNetService<T = any> {
    // + NSNetService(SMKWebConnection):
    addressStrings<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSNetService<T = any> {
      // + NSNetService(SMKWebConnection):
      addressStringWithData<R = unknown, P0 = unknown>(_addressStringWithData: P0): R;
    }
  }
}

declare const NSNetService: cocoa.classes.NSNetService;
