/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDiscardableContentProtocol<T = any> {
    isContentDiscarded<R = boolean>(): R;
    discardContentIfPossible<R = void>(): R;
    endContentAccess<R = void>(): R;
    beginContentAccess<R = boolean>(): R;
  }
  namespace classes {
    export interface NSDiscardableContentProtocol<T = any> {  }
  }
}
