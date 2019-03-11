/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPortalView2<T = any> extends cocoa.NSView, cocoa.NSPortalViewImplementationProtocol {
    absoluteGeometryChanged<R = void, P0 = unknown>(_absoluteGeometryChanged: P0): R;
    sourceViewNeedsDisplayInRect<R = void, P0 = unknown>(_sourceViewNeedsDisplayInRect: P0): R;
    sourceView<R = cocoa.NSView>(): R;
    setSourceView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSPortalView2<T = any> extends cocoa.classes.NSView, cocoa.classes.NSPortalViewImplementationProtocol {
      alloc<R = _NSPortalView2>(): R;
      new: <R = _NSPortalView2>() => R;
    }
  }
}
