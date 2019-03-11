/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMetadataQueryResultGroupArray<T = any> extends cocoa.NSArray {
    objectAtIndex<R = unknown, P0 = number>(_objectAtIndex: P0): R;
    count<R = number>(): R;
    dealloc<R = void>(): R;
    _init<R = unknown, P0 = unknown>(__init: P0): R;
  }
  namespace classes {
    export interface _NSMetadataQueryResultGroupArray<T = any> extends cocoa.classes.NSArray {  }
  }
}
