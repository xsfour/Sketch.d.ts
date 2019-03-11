/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSViewControllerPopoverTransition<T = any> extends cocoa.NSViewControllerPresentationAnimatorObject {
    initWithPositioningRect_ofView_preferredEdge_behavior<R = unknown, P0 = cocoa.CGRect, P1 = unknown, P2 = number, P3 = number>(_initWithPositioningRect: P0, _ofView: P1, _preferredEdge: P2, _behavior: P3): R;
    _windowDidClose<R = void, P0 = unknown>(__windowDidClose: P0): R;
  }
  namespace classes {
    export interface NSViewControllerPopoverTransition<T = any> extends cocoa.classes.NSViewControllerPresentationAnimatorObject {
      alloc<R = NSViewControllerPopoverTransition>(): R;
      new: <R = NSViewControllerPopoverTransition>() => R;
    }
  }
}

declare const NSViewControllerPopoverTransition: cocoa.classes.NSViewControllerPopoverTransition;
