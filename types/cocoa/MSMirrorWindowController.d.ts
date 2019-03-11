/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMirrorWindowController<T = any> extends cocoa.NSWindowController, cocoa.MSMirrorWindowControllerContentProtocol, cocoa.NSWindowDelegateProtocol, cocoa.WKNavigationDelegateProtocol, cocoa.WKScriptMessageHandlerProtocol {
    relayResponderAction_with<R = void, P0 = string, P1 = unknown>(_relayResponderAction: P0, _with: P1): R;
    showContextualMenuWithEvent<R = void, P0 = unknown>(_showContextualMenuWithEvent: P0): R;
    goWithTheFlow<R = void, P0 = unknown>(_goWithTheFlow: P0): R;
    goBack<R = void, P0 = unknown>(_goBack: P0): R;
    toggleFlowHome<R = void, P0 = unknown>(_toggleFlowHome: P0): R;
    openStartpoint<R = void, P0 = unknown>(_openStartpoint: P0): R;
    startpointsMenuShowingArtboardID<R = unknown, P0 = unknown>(_startpointsMenuShowingArtboardID: P0): R;
    startpointsMenu<R = unknown>(): R;
    menuItemForArtboard_shownArtboard<R = unknown, P0 = unknown, P1 = unknown>(_menuItemForArtboard: P0, _shownArtboard: P1): R;
    selectArtboardMenuItem_shownArtboard<R = void, P0 = unknown, P1 = unknown>(_selectArtboardMenuItem: P0, _shownArtboard: P1): R;
    updateBackButtonEnabled<R = void>(): R;
    updateArtboardButtonShowingArtboard<R = void, P0 = unknown>(_updateArtboardButtonShowingArtboard: P0): R;
    updateArtboardButtonShowingArtboardID<R = void, P0 = unknown>(_updateArtboardButtonShowingArtboardID: P0): R;
    currentArtboardDidChangeNotification<R = void, P0 = unknown>(_currentArtboardDidChangeNotification: P0): R;
    documentDidUpdateNotification<R = void, P0 = unknown>(_documentDidUpdateNotification: P0): R;
    documentDidChangeNotification<R = void, P0 = unknown>(_documentDidChangeNotification: P0): R;
    urlRequest<R = unknown>(): R;
    whitelistClientID<R = void>(): R;
    startLoading<R = void>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    transitionToArtboardID_animatedBy<R = void, P0 = unknown, P1 = number>(_transitionToArtboardID: P0, _animatedBy: P1): R;
    changeVisibleArtboardID<R = void, P0 = unknown>(_changeVisibleArtboardID: P0): R;
    sortedArtboards<R = unknown, P0 = unknown>(_sortedArtboards: P0): R;
    webView<R = cocoa.WKWebView>(): R;
    setWebView<R = void, P0 = cocoa.WKWebView>(_v: P0): R;
    backgroundView<R = cocoa.MSColorView>(): R;
    setBackgroundView<R = void, P0 = cocoa.MSColorView>(_v: P0): R;
    backToolbarItem<R = cocoa.NSToolbarItem>(): R;
    setBackToolbarItem<R = void, P0 = cocoa.NSToolbarItem>(_v: P0): R;
    backButton<R = cocoa.NSButton>(): R;
    setBackButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    startpointButton<R = cocoa.NSButton>(): R;
    setStartpointButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
    artboardButton<R = cocoa.NSPopUpButton>(): R;
    setArtboardButton<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    artboardToolbarItem<R = cocoa.NSToolbarItem>(): R;
    setArtboardToolbarItem<R = void, P0 = cocoa.NSToolbarItem>(_v: P0): R;
    fittingWindowFrame<R = cocoa.CGRect>(): R;
    viewPort<R = cocoa.CGRect>(): R;
    currentStartpoint<R = cocoa.MSImmutableArtboardGroup>(): R;
    startpoints<R = cocoa.NSArray>(): R;
    firstArtboardID<R = cocoa.NSString>(): R;
    defaultArtboardID<R = cocoa.NSString>(): R;
    visibleArtboardID<R = cocoa.NSString>(): R;
    currentArtboardID<R = cocoa.NSString>(): R;
    currentMutableDocument<R = cocoa.MSDocumentData>(): R;
    currentDocument<R = cocoa.MSImmutableDocumentData>(): R;
    dataProvider<R = cocoa.MSMirrorDataProvider>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSMirrorWindowController<T = any> extends cocoa.classes.NSWindowController, cocoa.classes.MSMirrorWindowControllerContentProtocol, cocoa.classes.NSWindowDelegateProtocol, cocoa.classes.WKNavigationDelegateProtocol, cocoa.classes.WKScriptMessageHandlerProtocol {
      alloc<R = MSMirrorWindowController>(): R;
      new: <R = MSMirrorWindowController>() => R;
      show<R = void>(): R;
      sharedController<R = unknown>(): R;
    }
  }
}

declare const MSMirrorWindowController: cocoa.classes.MSMirrorWindowController;
