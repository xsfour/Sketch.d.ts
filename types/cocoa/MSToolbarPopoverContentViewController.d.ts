/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarPopoverContentViewController<T = any> extends cocoa.NSViewController {
    cxx_destruct<R = void>(): R;
    animateFrameWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_animateFrameWithCompletionHandler: P0): R;
    newActionButtonWithTitle_action<R = unknown, P0 = unknown, P1 = string>(_newActionButtonWithTitle: P0, _action: P1): R;
    newLabel<R = unknown>(): R;
    initWithAction<R = unknown, P0 = unknown>(_initWithAction: P0): R;
    stackView<R = cocoa.NSStackView>(): R;
    setStackView<R = void, P0 = cocoa.NSStackView>(_v: P0): R;
    action<R = cocoa.MSPopoverAction>(): R;
    footerLabel<R = cocoa.NSTextField>(): R;
    actionView<R = cocoa.NSView>(): R;
    descriptionLabel<R = cocoa.NSTextField>(): R;
    titleLabel<R = cocoa.NSTextField>(): R;
    imageView<R = cocoa.NSImageView>(): R;
    edgeInsets<R = cocoa.NSEdgeInsets>(): R;
  }
  namespace classes {
    export interface MSToolbarPopoverContentViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = MSToolbarPopoverContentViewController>(): R;
      new: <R = MSToolbarPopoverContentViewController>() => R;
    }
  }
}

declare const MSToolbarPopoverContentViewController: cocoa.classes.MSToolbarPopoverContentViewController;
