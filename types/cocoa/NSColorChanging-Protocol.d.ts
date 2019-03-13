/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorChangingProtocol<T = any> extends NSObjectProtocol {
    changeColor<R = void, P0 = NSColorPanel>(_changeColor: P0): R;
  }
  namespace classes {
    export interface NSColorChangingProtocol<T = any> extends NSObjectProtocol {  }
  }
}
