/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserColumnView<T = any> extends NSScrollView {
    _markedWidthDiffersFromCurrentWidth<R = boolean>(): R;
    _clearMarkedWidth<R = void>(): R;
    _markWidth<R = void>(): R;
    _setMarkedWidth<R = void, P0 = number>(__setMarkedWidth: P0): R;
    _updateHorizontalScrollerAvoidance<R = void>(): R;
    setScrollerStyle<R = void, P0 = number>(_setScrollerStyle: P0): R;
    shouldAllowUserColumnResizing<R = boolean>(): R;
    setIsEmptyColumn<R = void, P0 = boolean>(_setIsEmptyColumn: P0): R;
    columnResizeButtonRect<R = CGRect>(): R;
    _doRemoveFromSuperviewWithOutNeedingDisplay<R = void, P0 = boolean>(__doRemoveFromSuperviewWithOutNeedingDisplay: P0): R;
    _endColumnAnimationOptimization<R = void>(): R;
    _beginColumnAnimationOptimization<R = void>(): R;
    _enclosingBrowserView<R = unknown>(): R;
    _setDrawsColumnDividerLine<R = void, P0 = boolean>(__setDrawsColumnDividerLine: P0): R;
    _drawsColumnDividerLine<R = boolean>(): R;
    _columnDividerLineRect<R = CGRect>(): R;
  }
  namespace classes {
    export interface _NSBrowserColumnView<T = any> extends NSScrollView {
      alloc<R = _NSBrowserColumnView>(): R;
      new: <R = _NSBrowserColumnView>() => R;
      columnResizeButtonImage<R = unknown>(): R;
    }
  }
}
