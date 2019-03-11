/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPortalViewImplementationProtocol<T = any> extends cocoa.NSObjectProtocol {
    sourceView<R = cocoa.NSView>(): R;
    setSourceView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSPortalViewImplementationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSPortalViewImplementationProtocol: cocoa.classes.NSPortalViewImplementationProtocol;
