/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CODebugControllerProtocol<T = any> {
    output_args<R = void, P0 = NSString, P1 = __va_list_tag>(_output: P0, _args: P1): R;
  }
  namespace classes {
    export interface CODebugControllerProtocol<T = any> {  }
  }
}
