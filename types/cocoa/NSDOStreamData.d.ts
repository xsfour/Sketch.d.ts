/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDOStreamData<T = any> extends NSMutableData {
    length<R = number>(): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    finalize<R = void>(): R;
    dealloc<R = void>(): R;
    init<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDOStreamData<T = any> extends NSMutableData {  }
  }
}

declare const NSDOStreamData: cocoa.classes.NSDOStreamData;
