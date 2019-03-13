/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardPopoverSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
    popoverBehavior<R = number>(): R;
    setPopoverBehavior<R = void, P0 = number>(_v: P0): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    anchorView<R = NSView>(): R;
    setAnchorView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSStoryboardPopoverSegueTemplate<T = any> extends NSStoryboardSegueTemplate, NSCodingProtocol {
      alloc<R = NSStoryboardPopoverSegueTemplate>(): R;
      new: <R = NSStoryboardPopoverSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardPopoverSegueTemplate: cocoa.classes.NSStoryboardPopoverSegueTemplate;
