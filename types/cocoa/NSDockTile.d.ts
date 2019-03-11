/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDockTile<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    _dockIsAlive<R = void, P0 = boolean>(__dockIsAlive: P0): R;
    _updateDockWindowIDAndDisplayIfNeeded<R = void, P0 = boolean>(__updateDockWindowIDAndDisplayIfNeeded: P0): R;
    _dockTileScaleFactorChanged<R = void, P0 = unknown>(__dockTileScaleFactorChanged: P0): R;
    _backstopView<R = unknown>(): R;
    _tileImage<R = unknown>(): R;
    display<R = void>(): R;
    _reenableAppNap<R = void, P0 = unknown>(__reenableAppNap: P0): R;
    _temporarilyDisableAppNap<R = void>(): R;
    _getSizeFromDock<R = cocoa.CGSize>(): R;
    dealloc<R = void>(): R;
    _createFrameViewIfNeeded<R = void>(): R;
    _releaseContextIfEmpty<R = boolean>(): R;
    _hasCustomContent<R = boolean>(): R;
    _releaseDockContext<R = void>(): R;
    _unregisterForDockScaleChangeNotification<R = void>(): R;
    _registerForDockScaleChangeNotification<R = void>(): R;
    invalidateOwner<R = void>(): R;
    initWithOwner<R = unknown, P0 = unknown>(_initWithOwner: P0): R;
    _getDockContext_andSize<R = boolean, P0 = cocoa.CGContext, P1 = cocoa.CGSize>(__getDockContext: P0, _andSize: P1): R;
    frameChanged<R = void, P0 = unknown>(_frameChanged: P0): R;
    _miniViewResized<R = void>(): R;
    _setMiniViewWindowLevel<R = void, P0 = number>(__setMiniViewWindowLevel: P0): R;
    _setMiniViewShown<R = void, P0 = boolean>(__setMiniViewShown: P0): R;
    _setMiniView_contextid<R = void, P0 = number, P1 = number>(__setMiniView: P0, _contextid: P1): R;
    badgeLabel<R = cocoa.NSString>(): R;
    setBadgeLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    showsApplicationBadge<R = boolean>(): R;
    setShowsApplicationBadge<R = void, P0 = boolean>(_v: P0): R;
    contentView<R = cocoa.NSView>(): R;
    setContentView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    size<R = cocoa.CGSize>(): R;
    owner<R = unknown>(): R;
    miniView<R = cocoa.NSView>(): R;
    setMiniView<R = void, P0 = cocoa.NSView>(_v: P0): R;
  }
  namespace classes {
    export interface NSDockTile<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDockTile>(): R;
      new: <R = NSDockTile>() => R;
    }
  }
}

declare const NSDockTile: cocoa.classes.NSDockTile;
