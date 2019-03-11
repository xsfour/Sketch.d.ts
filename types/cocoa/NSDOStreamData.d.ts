/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDOStreamData<T = any> extends cocoa.NSMutableData {
    length<R = number>(): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDOStreamData<T = any> extends cocoa.classes.NSMutableData {  }
  }
}

declare const NSDOStreamData: cocoa.classes.NSDOStreamData;
