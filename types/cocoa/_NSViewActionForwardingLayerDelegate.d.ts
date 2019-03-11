/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewActionForwardingLayerDelegate<T = any> extends cocoa.NSObject, cocoa.CABackdropLayerDelegateProtocol, cocoa.CALayerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
    view<R = cocoa.NSView>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSViewActionForwardingLayerDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.CABackdropLayerDelegateProtocol, cocoa.classes.CALayerDelegateProtocol {
      alloc<R = _NSViewActionForwardingLayerDelegate>(): R;
      new: <R = _NSViewActionForwardingLayerDelegate>() => R;
    }
  }
}
