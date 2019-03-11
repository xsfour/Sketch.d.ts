/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderData<T = any> extends cocoa.NSData {
    retainCount<R = number>(): R;
    retain<R = unknown>(): R;
    release<R = void>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithBytes_length_copy_deallocator<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = cocoa.CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _copy: P2, _deallocator: P3): R;
    init<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPlaceholderData<T = any> extends cocoa.classes.NSData {  }
  }
}
