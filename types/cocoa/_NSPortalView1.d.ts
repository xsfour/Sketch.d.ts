/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPortalView1<T = any> extends NSView, NSPortalViewImplementationProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    sourceView<R = NSView>(): R;
    setSourceView<R = void, P0 = NSView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPortalView1<T = any> extends NSView, NSPortalViewImplementationProtocol {
      alloc<R = _NSPortalView1>(): R;
      new: <R = _NSPortalView1>() => R;
    }
  }
}
