/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPopoverDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    popoverShouldTrackSuperviewOfAttachedToView<R = boolean, P0 = cocoa.BCPopover>(_popoverShouldTrackSuperviewOfAttachedToView: P0): R;
    popoverWillReturnUndoManager<R = cocoa.NSUndoManager, P0 = cocoa.BCPopover>(_popoverWillReturnUndoManager: P0): R;
    popoverShouldAnimateOnContentFrameDidChange<R = boolean, P0 = cocoa.NSNotification>(_popoverShouldAnimateOnContentFrameDidChange: P0): R;
    popoverShouldCauseExistingPopoversToClose<R = boolean, P0 = cocoa.BCPopover>(_popoverShouldCauseExistingPopoversToClose: P0): R;
    popoverShouldCloseWhenNewPopoverOpens_newPopover<R = boolean, P0 = cocoa.BCPopover, P1 = cocoa.BCPopover>(_popoverShouldCloseWhenNewPopoverOpens: P0, _newPopover: P1): R;
    popoverWindowDidMove<R = void, P0 = cocoa.BCPopover>(_popoverWindowDidMove: P0): R;
    popoverWindowSizeDidChange<R = void, P0 = cocoa.BCPopover>(_popoverWindowSizeDidChange: P0): R;
    popoverWillClose<R = void, P0 = cocoa.BCPopover>(_popoverWillClose: P0): R;
    popoverWillShow<R = void, P0 = cocoa.NSNotification>(_popoverWillShow: P0): R;
    minimumPopoverContentViewHeight<R = number, P0 = cocoa.BCPopover>(_minimumPopoverContentViewHeight: P0): R;
  }
  namespace classes {
    export interface BCPopoverDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCPopoverDelegateProtocol: cocoa.classes.BCPopoverDelegateProtocol;
