/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortalViewImplementationProtocol<T = any> extends NSObjectProtocol {
    sourceView<R = NSView>(): R;
    setSourceView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSPortalViewImplementationProtocol<T = any> extends NSObjectProtocol {  }
  }
}
