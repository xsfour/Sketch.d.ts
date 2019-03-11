/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRemoteViewDelegateProtocol<T = any> {
    constraintsDidChangeInFrameOfAccessoryWindowOfView<R = void, P0 = cocoa.NSRemoteView>(_constraintsDidChangeInFrameOfAccessoryWindowOfView: P0): R;
    accessoryWindowOfViewWillUpdateConstraintsIfNeeded<R = void, P0 = cocoa.NSRemoteView>(_accessoryWindowOfViewWillUpdateConstraintsIfNeeded: P0): R;
    windowOfViewShouldResignKey<R = boolean, P0 = cocoa.NSRemoteView>(_windowOfViewShouldResignKey: P0): R;
    windowOfViewShouldBecomeKey<R = boolean, P0 = cocoa.NSRemoteView>(_windowOfViewShouldBecomeKey: P0): R;
    viewShouldDragOldestAncestorWindow<R = boolean, P0 = cocoa.NSRemoteView>(_viewShouldDragOldestAncestorWindow: P0): R;
    view_shouldResize<R = boolean, P0 = cocoa.NSRemoteView, P1 = cocoa.CGSize>(_view: P0, _shouldResize: P1): R;
    view_willHaveServiceFontSmoothingBackgroundColor<R = cocoa.NSColor, P0 = cocoa.NSRemoteView, P1 = cocoa.NSColor>(_view: P0, _willHaveServiceFontSmoothingBackgroundColor: P1): R;
    viewDidRetreatToConfigPhase<R = void, P0 = cocoa.NSRemoteView>(_viewDidRetreatToConfigPhase: P0): R;
    viewDidAdvanceToRunPhase<R = void, P0 = cocoa.NSRemoteView>(_viewDidAdvanceToRunPhase: P0): R;
    viewDidAdvanceToConfigPhase<R = void, P0 = cocoa.NSRemoteView>(_viewDidAdvanceToConfigPhase: P0): R;
    viewDidInvalidate<R = void, P0 = cocoa.NSRemoteView>(_viewDidInvalidate: P0): R;
    viewWillInvalidate<R = void, P0 = cocoa.NSRemoteView>(_viewWillInvalidate: P0): R;
    view_encounteredError<R = void, P0 = cocoa.NSRemoteView, P1 = cocoa.NSError>(_view: P0, _encounteredError: P1): R;
    exportedObject<R = cocoa.NSObject>(): R;
    exportedInterface<R = cocoa.NSXPCInterface>(): R;
    serviceViewControllerInterface<R = cocoa.NSXPCInterface>(): R;
    shouldRetainExportedObject<R = boolean>(): R;
  }
  namespace classes {
    export interface NSRemoteViewDelegateProtocol<T = any> {  }
  }
}

declare const NSRemoteViewDelegateProtocol: cocoa.classes.NSRemoteViewDelegateProtocol;
