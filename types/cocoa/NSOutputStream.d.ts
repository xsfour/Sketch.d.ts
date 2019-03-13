/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutputStream<T = any> {
    // + NSOutputStream(NSCFOutputStreamAdditions,NSOutputStream):
    _cfStreamError<R = unknown>(): R;
    _cfTypeID<R = number>(): R;
    initWithURL_append<R = unknown, P0 = unknown, P1 = boolean>(_initWithURL: P0, _append: P1): R;
    initToBuffer_capacity<R = unknown, P0 = string, P1 = number>(_initToBuffer: P0, _capacity: P1): R;
    initToMemory<R = unknown>(): R;
    hasSpaceAvailable<R = boolean>(): R;
    write_maxLength<R = number, P0 = string, P1 = number>(_write: P0, _maxLength: P1): R;
  }
  namespace classes {
    export interface NSOutputStream<T = any> {
      // + NSOutputStream(NSCFOutputStreamAdditions,NSOutputStream):
      outputStreamWithURL_append<R = unknown, P0 = unknown, P1 = boolean>(_outputStreamWithURL: P0, _append: P1): R;
      outputStreamToFileAtPath_append<R = unknown, P0 = unknown, P1 = boolean>(_outputStreamToFileAtPath: P0, _append: P1): R;
      outputStreamToBuffer_capacity<R = unknown, P0 = string, P1 = number>(_outputStreamToBuffer: P0, _capacity: P1): R;
      outputStreamToMemory<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSOutputStream: cocoa.classes.NSOutputStream;
