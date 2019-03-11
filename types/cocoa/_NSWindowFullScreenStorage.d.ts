/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowFullScreenStorage<T = any> extends cocoa._NSFullScreenStorage {
    windowJoinedTileOnCreation<R = boolean>(): R;
    setWindowJoinedTileOnCreation<R = void, P0 = boolean>(_v: P0): R;
    userTilePreferredSize<R = cocoa.CGSize>(): R;
    setUserTilePreferredSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    savedScreenNumber<R = number>(): R;
    setSavedScreenNumber<R = void, P0 = number>(_v: P0): R;
    savedScreenFrame<R = cocoa.CGRect>(): R;
    setSavedScreenFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    toolbarWasHidden<R = boolean>(): R;
    setToolbarWasHidden<R = void, P0 = boolean>(_v: P0): R;
    stringWithSavedFrame<R = cocoa.NSString>(): R;
    setStringWithSavedFrame<R = void, P0 = cocoa.NSString>(_v: P0): R;
    savedFrame<R = cocoa.CGRect>(): R;
    setSavedFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface _NSWindowFullScreenStorage<T = any> extends cocoa.classes._NSFullScreenStorage {
      alloc<R = _NSWindowFullScreenStorage>(): R;
      new: <R = _NSWindowFullScreenStorage>() => R;
    }
  }
}
