/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortCoder<T = any> extends NSCoder {
    initWithReceivePort_sendPort_components<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithReceivePort: P0, _sendPort: P1, _components: P2): R;
    dispatch<R = void>(): R;
    decodePortObject<R = unknown>(): R;
    encodePortObject<R = void, P0 = unknown>(_encodePortObject: P0): R;
    _connection<R = unknown>(): R;
    connection<R = unknown>(): R;
    isByref<R = boolean>(): R;
    isBycopy<R = boolean>(): R;
  }
  namespace classes {
    export interface NSPortCoder<T = any> extends NSCoder {
      alloc<R = NSPortCoder>(): R;
      new: <R = NSPortCoder>() => R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      portCoderWithReceivePort_sendPort_components<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_portCoderWithReceivePort: P0, _sendPort: P1, _components: P2): R;
    }
  }
}

declare const NSPortCoder: cocoa.classes.NSPortCoder;
