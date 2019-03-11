/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenTileDividerWindowContentView<T = any> extends cocoa.NSView {
    cleanupLiveResize<R = void>(): R;
    performDragOnMouseDown<R = void, P0 = unknown>(_performDragOnMouseDown: P0): R;
    eventLocationRelativeToTileDivider<R = cocoa.CGPoint, P0 = unknown>(_eventLocationRelativeToTileDivider: P0): R;
    dividerOriginX<R = number>(): R;
    performDoubleClickResize<R = void, P0 = unknown>(_performDoubleClickResize: P0): R;
    resizeCursor<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSFullScreenTileDividerWindowContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSFullScreenTileDividerWindowContentView>(): R;
      new: <R = _NSFullScreenTileDividerWindowContentView>() => R;
      optionsForLiveResize<R = number>(): R;
    }
  }
}
