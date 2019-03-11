/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarSplitViewPartitionAdapter<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    _setListenToViewGeometryInWindowDidChange_forView<R = void, P0 = boolean, P1 = unknown>(__setListenToViewGeometryInWindowDidChange: P0, _forView: P1): R;
    splitViewGeometryInWindowDidChange<R = void, P0 = unknown>(_splitViewGeometryInWindowDidChange: P0): R;
    _geometryInWindowDidChangeForView<R = void, P0 = unknown>(__geometryInWindowDidChangeForView: P0): R;
    getRectToExclude_inWindowCoordinatesForWindow<R = boolean, P0 = cocoa.CGRect, P1 = unknown>(_getRectToExclude: P0, _inWindowCoordinatesForWindow: P1): R;
    _splitViewDidResize<R = void, P0 = unknown>(__splitViewDidResize: P0): R;
    _splitViewDividerFrame<R = cocoa.CGRect>(): R;
    toolbarItem<R = cocoa.NSToolbarItem>(): R;
    setToolbarItem<R = void, P0 = cocoa.NSToolbarItem>(_v: P0): R;
    splitView<R = cocoa.NSSplitView>(): R;
    setSplitView<R = void, P0 = cocoa.NSSplitView>(_v: P0): R;
    splitViewDividerIndex<R = number>(): R;
    setSplitViewDividerIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSToolbarSplitViewPartitionAdapter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSToolbarSplitViewPartitionAdapter>(): R;
      new: <R = _NSToolbarSplitViewPartitionAdapter>() => R;
    }
  }
}
