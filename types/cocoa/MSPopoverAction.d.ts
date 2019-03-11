/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopoverAction<T = any> extends cocoa.MSDocumentAction, cocoa.BCPopoverDelegateProtocol {
    windowDidResignMain<R = void, P0 = unknown>(_windowDidResignMain: P0): R;
    viewForAttachingPopover<R = unknown, P0 = unknown>(_viewForAttachingPopover: P0): R;
    closePopover<R = void>(): R;
    showPopoverToForSender_viewController<R = void, P0 = unknown, P1 = unknown>(_showPopoverToForSender: P0, _viewController: P1): R;
    showPopover<R = void, P0 = unknown>(_showPopover: P0): R;
    popover<R = cocoa.BCPopover>(): R;
    setPopover<R = void, P0 = cocoa.BCPopover>(_v: P0): R;
    popoverViewController<R = cocoa.NSViewController>(): R;
    popoverVisible<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSPopoverAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.BCPopoverDelegateProtocol {
      alloc<R = MSPopoverAction>(): R;
      new: <R = MSPopoverAction>() => R;
      popoverClass<R = unknown>(): R;
    }
  }
}

declare const MSPopoverAction: cocoa.classes.MSPopoverAction;
