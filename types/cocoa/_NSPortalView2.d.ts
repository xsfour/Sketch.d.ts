/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPortalView2<T = any> extends NSView, NSPortalViewImplementationProtocol {
    absoluteGeometryChanged<R = void, P0 = unknown>(_absoluteGeometryChanged: P0): R;
    sourceViewNeedsDisplayInRect<R = void, P0 = unknown>(_sourceViewNeedsDisplayInRect: P0): R;
    sourceView<R = NSView>(): R;
    setSourceView<R = void, P0 = NSView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPortalView2<T = any> extends NSView, NSPortalViewImplementationProtocol {
      alloc<R = _NSPortalView2>(): R;
      new: <R = _NSPortalView2>() => R;
    }
  }
}
