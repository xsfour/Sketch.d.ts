/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorUserProtocol<T = any> extends cocoa.NSObjectProtocol {
    updateColorCounter<R = void, P0 = cocoa.MSColorCounter>(_updateColorCounter: P0): R;
  }
  namespace classes {
    export interface MSColorUserProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSColorUserProtocol: cocoa.classes.MSColorUserProtocol;
