/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarFlexibleSpace<T = any> extends NSView {
    _shouldDrawFlexibleSpaceOutline<R = boolean>(): R;
    _drawToolbarFlexibleSpaceInRect<R = void, P0 = CGRect>(__drawToolbarFlexibleSpaceInRect: P0): R;
    _currentCoreUIWidget<R = __CFString>(): R;
    allowsVibrancy<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    inPalette<R = boolean>(): R;
    setInPalette<R = void, P0 = boolean>(_setInPalette: P0): R;
    initWithSize_forSpaceItem<R = unknown, P0 = CGSize, P1 = unknown>(_initWithSize: P0, _forSpaceItem: P1): R;
    spaceItem<R = NSToolbarFlexibleSpaceItem>(): R;
    setSpaceItem<R = void, P0 = NSToolbarFlexibleSpaceItem>(_v: P0): R;
  }
  namespace classes {
    export interface _NSToolbarFlexibleSpace<T = any> extends NSView {
      alloc<R = _NSToolbarFlexibleSpace>(): R;
      new: <R = _NSToolbarFlexibleSpace>() => R;
    }
  }
}
