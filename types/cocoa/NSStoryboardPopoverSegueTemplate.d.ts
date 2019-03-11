/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStoryboardPopoverSegueTemplate<T = any> extends cocoa.NSStoryboardSegueTemplate, cocoa.NSCodingProtocol {
    popoverBehavior<R = number>(): R;
    setPopoverBehavior<R = void, P0 = number>(_v: P0): R;
    preferredEdge<R = number>(): R;
    setPreferredEdge<R = void, P0 = number>(_v: P0): R;
    anchorView<R = cocoa.NSView>(): R;
    setAnchorView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSStoryboardPopoverSegueTemplate<T = any> extends cocoa.classes.NSStoryboardSegueTemplate, cocoa.classes.NSCodingProtocol {
      alloc<R = NSStoryboardPopoverSegueTemplate>(): R;
      new: <R = NSStoryboardPopoverSegueTemplate>() => R;
    }
  }
}

declare const NSStoryboardPopoverSegueTemplate: cocoa.classes.NSStoryboardPopoverSegueTemplate;
