/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputStream<T = any> {
    // + NSInputStream(NSCFInputStreamAdditions,NSInputStream):
    _cfStreamError<R = unknown>(): R;
    _cfTypeID<R = number>(): R;
    hasBytesAvailable<R = boolean>(): R;
    getBuffer_length<R = boolean, P0 = string, P1 = number>(_getBuffer: P0, _length: P1): R;
    read_maxLength<R = number, P0 = string, P1 = number>(_read: P0, _maxLength: P1): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
  }
  namespace classes {
    export interface NSInputStream<T = any> {
      // + NSInputStream(NSCFInputStreamAdditions,NSInputStream):
      inputStreamWithURL<R = unknown, P0 = unknown>(_inputStreamWithURL: P0): R;
      inputStreamWithFileAtPath<R = unknown, P0 = unknown>(_inputStreamWithFileAtPath: P0): R;
      inputStreamWithData<R = unknown, P0 = unknown>(_inputStreamWithData: P0): R;
      allocWithZone<R = unknown, P0 = cocoa._NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSInputStream: cocoa.classes.NSInputStream;
