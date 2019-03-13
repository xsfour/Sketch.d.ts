/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorUserProtocol<T = any> extends NSObjectProtocol {
    updateColorCounter<R = void, P0 = MSColorCounter>(_updateColorCounter: P0): R;
  }
  namespace classes {
    export interface MSColorUserProtocol<T = any> extends NSObjectProtocol {  }
  }
}
