/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomReleaseData<T = any> extends cocoa.NSMutableData {
    dealloc<R = void>(): R;
    initWithBytes_length_releaseBytesBlock<R = unknown, P0 = void, P1 = number, P2 = cocoa.CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _releaseBytesBlock: P2): R;
    setLength<R = void, P0 = number>(_setLength: P0): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace classes {
    export interface NSCustomReleaseData<T = any> extends cocoa.classes.NSMutableData {  }
  }
}

declare const NSCustomReleaseData: cocoa.classes.NSCustomReleaseData;
