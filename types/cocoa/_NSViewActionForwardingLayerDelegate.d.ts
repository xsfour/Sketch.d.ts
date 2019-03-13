/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSViewActionForwardingLayerDelegate<T = any> extends NSObject, CABackdropLayerDelegateProtocol, CALayerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    initWithView<R = unknown, P0 = unknown>(_initWithView: P0): R;
    view<R = NSView>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSViewActionForwardingLayerDelegate<T = any> extends NSObject, CABackdropLayerDelegateProtocol, CALayerDelegateProtocol {
      alloc<R = _NSViewActionForwardingLayerDelegate>(): R;
      new: <R = _NSViewActionForwardingLayerDelegate>() => R;
    }
  }
}
