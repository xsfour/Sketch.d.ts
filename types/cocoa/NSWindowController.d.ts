/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowController<T = any> extends NSResponder, NSSeguePerformingProtocol {
    cxx_destruct<R = void>(): R;
    _autounbinder<R = unknown>(): R;
    _finishedMakingConnections<R = void>(): R;
    loadWindow<R = void>(): R;
    _windowWillLoad<R = void>(): R;
    _windowDidLoad<R = void>(): R;
    windowDidLoad<R = void>(): R;
    windowWillLoad<R = void>(): R;
    _setDocumentShowsPanelOnClose<R = void, P0 = boolean>(__setDocumentShowsPanelOnClose: P0): R;
    _setNonModalDocumentError<R = void, P0 = unknown>(__setNonModalDocumentError: P0): R;
    _setDocumentAutosavingError<R = void, P0 = unknown>(__setDocumentAutosavingError: P0): R;
    _setDocumentEditingState_animate<R = void, P0 = number, P1 = boolean>(__setDocumentEditingState: P0, _animate: P1): R;
    _setShowAutosaveButton<R = void, P0 = boolean>(__setShowAutosaveButton: P0): R;
    showWindow<R = void, P0 = unknown>(_showWindow: P0): R;
    _findWindowLocationsWithRepresentativeWindow_count<R = void, P0 = unknown, P1 = number>(__findWindowLocationsWithRepresentativeWindow: P0, _count: P1): R;
    close<R = void>(): R;
    _windowDidClose<R = void>(): R;
    windowTitleForDocumentDisplayName<R = unknown, P0 = unknown>(_windowTitleForDocumentDisplayName: P0): R;
    _invalidateDocumentIcon<R = void>(): R;
    synchronizeWindowTitleWithDocumentName<R = void>(): R;
    setDocumentEdited<R = void, P0 = boolean>(_setDocumentEdited: P0): R;
    _setSegueTemplates<R = void, P0 = unknown>(__setSegueTemplates: P0): R;
    _segueTemplates<R = unknown>(): R;
    setStoryboard<R = void, P0 = unknown>(_setStoryboard: P0): R;
    storyboard<R = unknown>(): R;
    _setPresentingViewController<R = void, P0 = unknown>(__setPresentingViewController: P0): R;
    _windowDidChangeContentViewController<R = void, P0 = unknown>(__windowDidChangeContentViewController: P0): R;
    _setRetainedSelf<R = void, P0 = boolean>(__setRetainedSelf: P0): R;
    initWithWindowNibPath_owner<R = unknown, P0 = unknown, P1 = unknown>(_initWithWindowNibPath: P0, _owner: P1): R;
    initWithWindowNibName_owner<R = unknown, P0 = unknown, P1 = unknown>(_initWithWindowNibName: P0, _owner: P1): R;
    initWithWindowNibName<R = unknown, P0 = unknown>(_initWithWindowNibName: P0): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
    _responderDebugDescription<R = unknown>(): R;
    presentViewController_asPopoverRelativeToRect_ofView_preferredEdge_behavior<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = number, P4 = number>(_presentViewController: P0, _asPopoverRelativeToRect: P1, _ofView: P2, _preferredEdge: P3, _behavior: P4): R;
    dismissController<R = void, P0 = unknown>(_dismissController: P0): R;
    _frameAutosaveName<R = NSString>(): R;
    set_frameAutosaveName<R = void, P0 = NSString>(_v: P0): R;
    windowLoaded<R = boolean>(): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
    shouldCloseDocument<R = boolean>(): R;
    setShouldCloseDocument<R = void, P0 = boolean>(_v: P0): R;
    document<R = unknown>(): R;
    setDocument<R = void, P0 = unknown>(_v: P0): R;
    contentViewController<R = NSViewController>(): R;
    setContentViewController<R = void, P0 = NSViewController>(_v: P0): R;
    shouldCascadeWindows<R = boolean>(): R;
    setShouldCascadeWindows<R = void, P0 = boolean>(_v: P0): R;
    windowFrameAutosaveName<R = NSString>(): R;
    setWindowFrameAutosaveName<R = void, P0 = NSString>(_v: P0): R;
    owner<R = unknown>(): R;
    windowNibPath<R = NSString>(): R;
    windowNibName<R = NSString>(): R;
    presentingViewController<R = NSViewController>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSWindowController<T = any> extends NSResponder, NSSeguePerformingProtocol {
      alloc<R = NSWindowController>(): R;
      new: <R = NSWindowController>() => R;
      _doneWithLocations<R = void>(): R;
      windowControllerWithContentViewController<R = unknown, P0 = unknown>(_windowControllerWithContentViewController: P0): R;
    }
  }
}

declare const NSWindowController: cocoa.classes.NSWindowController;
