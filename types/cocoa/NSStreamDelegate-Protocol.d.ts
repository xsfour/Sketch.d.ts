/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStreamDelegateProtocol<T = any> extends NSObjectProtocol {
    stream_handleEvent<R = void, P0 = NSStream, P1 = number>(_stream: P0, _handleEvent: P1): R;
  }
  namespace classes {
    export interface NSStreamDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
