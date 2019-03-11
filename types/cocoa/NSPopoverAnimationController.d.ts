/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverAnimationController<T = any> extends cocoa.NSObject, cocoa.NSImmediateActionAnimationControllerProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    anchorView<R = cocoa.NSView>(): R;
    setAnchorView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    popover<R = cocoa.NSPopover>(): R;
    positioningRect<R = cocoa.CGRect>(): R;
    setPositioningRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPopoverAnimationController<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSImmediateActionAnimationControllerProtocol {
      alloc<R = NSPopoverAnimationController>(): R;
      new: <R = NSPopoverAnimationController>() => R;
      popoverAnimationControllerWithPopover<R = unknown, P0 = unknown>(_popoverAnimationControllerWithPopover: P0): R;
    }
  }
}

declare const NSPopoverAnimationController: cocoa.classes.NSPopoverAnimationController;
