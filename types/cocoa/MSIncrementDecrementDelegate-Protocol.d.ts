/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIncrementDecrementDelegateProtocol<T = any> {
    incrementBy<R = void, P0 = number>(_incrementBy: P0): R;
  }
  namespace classes {
    export interface MSIncrementDecrementDelegateProtocol<T = any> {  }
  }
}

declare const MSIncrementDecrementDelegateProtocol: cocoa.classes.MSIncrementDecrementDelegateProtocol;
