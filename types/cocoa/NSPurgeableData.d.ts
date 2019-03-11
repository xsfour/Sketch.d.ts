/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPurgeableData<T = any> extends cocoa.NSMutableData, cocoa.NSDiscardableContentProtocol {
    dealloc<R = void>(): R;
    initWithBytes_length_copy_deallocator<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = cocoa.CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _copy: P2, _deallocator: P3): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    init<R = unknown>(): R;
    _destroyMemory<R = void>(): R;
    description<R = unknown>(): R;
    setLength<R = void, P0 = number>(_setLength: P0): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace classes {
    export interface NSPurgeableData<T = any> extends cocoa.classes.NSMutableData, cocoa.classes.NSDiscardableContentProtocol {  }
  }
}

declare const NSPurgeableData: cocoa.classes.NSPurgeableData;
