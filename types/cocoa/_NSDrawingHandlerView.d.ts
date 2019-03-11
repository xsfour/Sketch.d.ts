/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDrawingHandlerView<T = any> extends cocoa.NSView {
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    initWithFrame_flipped_opaque<R = unknown, P0 = cocoa.CGRect, P1 = boolean, P2 = boolean>(_initWithFrame: P0, _flipped: P1, _opaque: P2): R;
    drawingHandler<R = cocoa.CDUnknownBlockType>(): R;
    setDrawingHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDrawingHandlerView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSDrawingHandlerView>(): R;
      new: <R = _NSDrawingHandlerView>() => R;
    }
  }
}
