/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExceptionAlertController<T = any> extends cocoa.NSWindowController {
    windowWillClose<R = void, P0 = unknown>(_windowWillClose: P0): R;
    windowWillResize_toSize<R = cocoa.CGSize, P0 = unknown, P1 = cocoa.CGSize>(_windowWillResize: P0, _toSize: P1): R;
    btnShowDetailsClicked<R = void, P0 = unknown>(_btnShowDetailsClicked: P0): R;
    btnClicked<R = void, P0 = unknown>(_btnClicked: P0): R;
    runModal<R = number>(): R;
    heightCollapseConstraint<R = cocoa.NSLayoutConstraint>(): R;
    setHeightCollapseConstraint<R = void, P0 = cocoa.NSLayoutConstraint>(_v: P0): R;
    showDetailsButton<R = cocoa.NSButton>(): R;
    setShowDetailsButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    expandedView<R = cocoa.NSView>(): R;
    setExpandedView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    showingDetails<R = boolean>(): R;
    setShowingDetails<R = void, P0 = boolean>(_v: P0): R;
    exceptionMessage<R = cocoa.NSString>(): R;
    setExceptionMessage<R = void, P0 = cocoa.NSString>(_v: P0): R;
  }
  namespace classes {
    export interface NSExceptionAlertController<T = any> extends cocoa.classes.NSWindowController {
      alloc<R = NSExceptionAlertController>(): R;
      new: <R = NSExceptionAlertController>() => R;
    }
  }
}

declare const NSExceptionAlertController: cocoa.classes.NSExceptionAlertController;
