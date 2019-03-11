/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COPrintControllerProtocol<T = any> {
    print<R = void, P0 = unknown>(_print: P0): R;
  }
  namespace classes {
    export interface COPrintControllerProtocol<T = any> {  }
  }
}

declare const COPrintControllerProtocol: cocoa.classes.COPrintControllerProtocol;
