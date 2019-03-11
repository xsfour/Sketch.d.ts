/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputClient_IncrementalSearchProtocol<T = any> {
    wouldHandleEvent<R = boolean, P0 = cocoa.NSEvent>(_wouldHandleEvent: P0): R;
    incrementalSearchClientGeometry<R = number>(): R;
  }
  namespace classes {
    export interface NSTextInputClient_IncrementalSearchProtocol<T = any> {  }
  }
}

declare const NSTextInputClient_IncrementalSearchProtocol: cocoa.classes.NSTextInputClient_IncrementalSearchProtocol;
