/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPopoverDelegateProtocol<T = any> {
    popoverDidClose<R = void, P0 = cocoa.NSNotification>(_popoverDidClose: P0): R;
    popoverWillClose<R = void, P0 = cocoa.NSNotification>(_popoverWillClose: P0): R;
    popoverDidShow<R = void, P0 = cocoa.NSNotification>(_popoverDidShow: P0): R;
    popoverWillShow<R = void, P0 = cocoa.NSNotification>(_popoverWillShow: P0): R;
    detachableWindowForPopover<R = cocoa.NSWindow, P0 = cocoa.NSPopover>(_detachableWindowForPopover: P0): R;
    popoverDidDetach<R = void, P0 = cocoa.NSPopover>(_popoverDidDetach: P0): R;
    popoverShouldDetach<R = boolean, P0 = cocoa.NSPopover>(_popoverShouldDetach: P0): R;
    popoverShouldClose<R = boolean, P0 = cocoa.NSPopover>(_popoverShouldClose: P0): R;
  }
  namespace classes {
    export interface NSPopoverDelegateProtocol<T = any> {  }
  }
}

declare const NSPopoverDelegateProtocol: cocoa.classes.NSPopoverDelegateProtocol;
