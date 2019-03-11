/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCopyingProtocol<T = any> {
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
  }
  namespace classes {
    export interface NSCopyingProtocol<T = any> {  }
  }
}

declare const NSCopyingProtocol: cocoa.classes.NSCopyingProtocol;
