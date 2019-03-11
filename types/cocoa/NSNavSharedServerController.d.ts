/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavSharedServerController<T = any> extends cocoa.NSViewController {
    updateConnectAsButtonForConnectionState<R = void, P0 = number>(_updateConnectAsButtonForConnectionState: P0): R;
    updateStatusTextForConnectionState_userName<R = void, P0 = number, P1 = unknown>(_updateStatusTextForConnectionState: P0, _userName: P1): R;
    updateStatus<R = void>(): R;
    sizeToFit<R = void>(): R;
    _frameChangedOnText<R = void, P0 = unknown>(__frameChangedOnText: P0): R;
    initAsSharedServerBannerView<R = unknown>(): R;
    initAsSharedServerView<R = unknown>(): R;
    userName<R = cocoa.NSString>(): R;
    setUserName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    connectionState<R = number>(): R;
    setConnectionState<R = void, P0 = number>(_v: P0): R;
    waitingForDisc<R = boolean>(): R;
    setWaitingForDisc<R = void, P0 = boolean>(_v: P0): R;
    usingDisc<R = boolean>(): R;
    setUsingDisc<R = void, P0 = boolean>(_v: P0): R;
    remoteDisc<R = boolean>(): R;
    setRemoteDisc<R = void, P0 = boolean>(_v: P0): R;
    isBannerView<R = boolean>(): R;
    setIsBannerView<R = void, P0 = boolean>(_v: P0): R;
    serverIcon<R = cocoa.NSImage>(): R;
    setServerIcon<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    serverName<R = cocoa.NSString>(): R;
    setServerName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    statusText<R = cocoa.NSString>(): R;
    setStatusText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    shareScreenButton<R = cocoa.NSButton>(): R;
    connectAsButton<R = cocoa.NSButton>(): R;
  }
  namespace classes {
    export interface NSNavSharedServerController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSNavSharedServerController>(): R;
      new: <R = NSNavSharedServerController>() => R;
    }
  }
}

declare const NSNavSharedServerController: cocoa.classes.NSNavSharedServerController;
