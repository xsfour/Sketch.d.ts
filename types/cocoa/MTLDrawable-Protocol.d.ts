/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MTLDrawableProtocol<T = any> extends NSObjectProtocol {
    presentAtTime<R = void, P0 = number>(_presentAtTime: P0): R;
    present<R = void>(): R;
  }
  namespace classes {
    export interface MTLDrawableProtocol<T = any> extends NSObjectProtocol {  }
  }
}
