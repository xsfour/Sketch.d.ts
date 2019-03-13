/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInlineData<T = any> extends NSData {
    _providesConcreteBacking<R = boolean>(): R;
    _createDispatchData<R = unknown>(): R;
    initWithBytes_length<R = unknown, P0 = void, P1 = number>(_initWithBytes: P0, _length: P1): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    _isCompact<R = boolean>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace classes {
    export interface _NSInlineData<T = any> extends NSData {  }
  }
}
