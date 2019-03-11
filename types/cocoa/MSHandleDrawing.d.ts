/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHandleDrawing<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface MSHandleDrawing<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSHandleDrawing>(): R;
      new: <R = MSHandleDrawing>() => R;
      resetZoomValue<R = void>(): R;
      setZoomValue<R = void, P0 = number>(_setZoomValue: P0): R;
      zoomValue<R = number>(): R;
      drawWithTransformStruct_aroundPoint_usingBlock<R = void, P0 = cocoa._CHTransformStruct, P1 = cocoa.CGPoint, P2 = cocoa.CDUnknownBlockType>(_drawWithTransformStruct: P0, _aroundPoint: P1, _usingBlock: P2): R;
      drawShadowForHover_inBlock<R = void, P0 = boolean, P1 = cocoa.CDUnknownBlockType>(_drawShadowForHover: P0, _inBlock: P1): R;
      gradient<R = unknown>(): R;
      shadowForHover<R = unknown, P0 = boolean>(_shadowForHover: P0): R;
      drawBezier<R = void, P0 = unknown>(_drawBezier: P0): R;
      drawRectAtPoint_ofType<R = void, P0 = cocoa.CGPoint, P1 = number>(_drawRectAtPoint: P0, _ofType: P1): R;
      drawGradientHandleAtPoint_color_selected<R = void, P0 = cocoa.CGPoint, P1 = unknown, P2 = boolean>(_drawGradientHandleAtPoint: P0, _color: P1, _selected: P2): R;
      drawAtPoint_ofType_state<R = void, P0 = cocoa.CGPoint, P1 = number, P2 = number>(_drawAtPoint: P0, _ofType: P1, _state: P2): R;
      dotSizeForType<R = number, P0 = number>(_dotSizeForType: P0): R;
      load<R = void>(): R;
    }
  }
}

declare const MSHandleDrawing: cocoa.classes.MSHandleDrawing;
