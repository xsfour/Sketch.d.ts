/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CODebugControllerProtocol<T = any> {
    output_args<R = void, P0 = cocoa.NSString, P1 = cocoa.__va_list_tag>(_output: P0, _args: P1): R;
  }
  namespace classes {
    export interface CODebugControllerProtocol<T = any> {  }
  }
}

declare const CODebugControllerProtocol: cocoa.classes.CODebugControllerProtocol;
