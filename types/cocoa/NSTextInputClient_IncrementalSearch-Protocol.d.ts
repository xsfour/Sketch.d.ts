/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputClient_IncrementalSearchProtocol<T = any> {
    wouldHandleEvent<R = boolean, P0 = NSEvent>(_wouldHandleEvent: P0): R;
    incrementalSearchClientGeometry<R = number>(): R;
  }
  namespace classes {
    export interface NSTextInputClient_IncrementalSearchProtocol<T = any> {  }
  }
}
