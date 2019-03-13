/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverAnimationController<T = any> extends NSObject, NSImmediateActionAnimationControllerProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    anchorView<R = NSView>(): R;
    setAnchorView<R = void, P0 = NSView>(_v: P0): R;
    popover<R = NSPopover>(): R;
    positioningRect<R = CGRect>(): R;
    setPositioningRect<R = void, P0 = CGRect>(_v: P0): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPopoverAnimationController<T = any> extends NSObject, NSImmediateActionAnimationControllerProtocol {
      alloc<R = NSPopoverAnimationController>(): R;
      new: <R = NSPopoverAnimationController>() => R;
      popoverAnimationControllerWithPopover<R = unknown, P0 = unknown>(_popoverAnimationControllerWithPopover: P0): R;
    }
  }
}

declare const NSPopoverAnimationController: cocoa.classes.NSPopoverAnimationController;
