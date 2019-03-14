/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorUserProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    updateColorCounter<R = void, P0 = MSColorCounter>(_updateColorCounter: P0): R;
  }
  namespace MSColorUserProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
