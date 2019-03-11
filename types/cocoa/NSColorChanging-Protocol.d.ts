/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorChangingProtocol<T = any> extends cocoa.NSObjectProtocol {
    changeColor<R = void, P0 = cocoa.NSColorPanel>(_changeColor: P0): R;
  }
  namespace classes {
    export interface NSColorChangingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSColorChangingProtocol: cocoa.classes.NSColorChangingProtocol;
