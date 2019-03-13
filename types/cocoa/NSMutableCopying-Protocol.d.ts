/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableCopyingProtocol<T = any> {
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
  }
  namespace classes {
    export interface NSMutableCopyingProtocol<T = any> {  }
  }
}
