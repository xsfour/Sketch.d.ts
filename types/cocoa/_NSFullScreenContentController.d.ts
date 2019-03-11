/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenContentController<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    addSiblingWindow_position_responseHandler<R = void, P0 = number, P1 = number, P2 = cocoa.CDUnknownBlockType>(_addSiblingWindow: P0, _position: P1, _responseHandler: P2): R;
    queryCanAddSiblingWindow_responseHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_queryCanAddSiblingWindow: P0, _responseHandler: P1): R;
    isOnActiveSpace<R = boolean>(): R;
    endLiveResize<R = void>(): R;
    startLiveResize<R = void>(): R;
    windowIDsForSnapshot<R = unknown>(): R;
    sharesTileWithOtherTabs<R = boolean>(): R;
    disableMCExit<R = boolean>(): R;
    performTileResizeToFit_acceptIncorrectSize<R = boolean, P0 = cocoa.CGSize, P1 = boolean>(_performTileResizeToFit: P0, _acceptIncorrectSize: P1): R;
    performTileResizeToFit<R = boolean, P0 = cocoa.CGSize>(_performTileResizeToFit: P0): R;
    cursorForResizeDirection<R = unknown, P0 = number>(_cursorForResizeDirection: P0): R;
    currentDividerResizeDirections<R = unknown>(): R;
    performDividerDragWithEvent_forResizeDirection<R = boolean, P0 = unknown, P1 = number>(_performDividerDragWithEvent: P0, _forResizeDirection: P1): R;
    thawWindows<R = void>(): R;
    freezeWindows<R = void>(): R;
    windowIDsToFreeze<R = unknown>(): R;
    menuBarCompanionController<R = unknown>(): R;
    displayChanged<R = void>(): R;
    reshapeContentForTileFrame_fromFrame<R = void, P0 = cocoa.CGRect, P1 = cocoa.CGRect>(_reshapeContentForTileFrame: P0, _fromFrame: P1): R;
    contentOwnerConnectionID<R = number>(): R;
    screen<R = unknown>(): R;
    activateFullScreenPresentationOptions<R = void>(): R;
    isPrincipalInSpace<R = boolean>(): R;
    setAsThePrincipalFullScreenWindowInSpace<R = void>(): R;
    resignPrincipalFullScreenWindowInSpace<R = void>(): R;
    _discardPresentationInstance<R = void>(): R;
    _makePresentationInstanceIfNeeded<R = void>(): R;
    parentSpaceDidChange<R = void>(): R;
    contentWindowFrame<R = cocoa.CGRect>(): R;
    contentWindowID<R = number>(): R;
    fullScreenStorage<R = unknown>(): R;
    dispose<R = void>(): R;
    dealloc<R = void>(): R;
    surrogateContentController<R = cocoa._NSFullScreenContentController>(): R;
    setSurrogateContentController<R = void, P0 = cocoa._NSFullScreenContentController>(_v: P0): R;
    presentationOptions<R = number>(): R;
    setPresentationOptions<R = void, P0 = number>(_v: P0): R;
    presentationInstance<R = cocoa.NSHIPresentationInstance>(): R;
    setPresentationInstance<R = void, P0 = cocoa.NSHIPresentationInstance>(_v: P0): R;
    space<R = cocoa._NSFullScreenSpace>(): R;
    setSpace<R = void, P0 = cocoa._NSFullScreenSpace>(_v: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenContentController<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFullScreenContentController>(): R;
      new: <R = _NSFullScreenContentController>() => R;
      _defaultPresentationOptions<R = number>(): R;
    }
  }
}
