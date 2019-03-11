/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers9ResizeBox<T = any> extends cocoa.SwiftObject {
    // + _TtC17SketchControllers9ResizeBox(SketchControllers,SketchControllers1):
    transformForConvertingFromCoordinateSpace<R = cocoa.CGAffineTransform, P0 = unknown>(_transformForConvertingFromCoordinateSpace: P0): R;
    transformForConvertingToCoordinateSpace<R = cocoa.CGAffineTransform, P0 = unknown>(_transformForConvertingToCoordinateSpace: P0): R;
    convertVector_fromCoordinateSpace<R = cocoa.CGVector, P0 = cocoa.CGVector, P1 = unknown>(_convertVector: P0, _fromCoordinateSpace: P1): R;
    convertVector_toCoordinateSpace<R = cocoa.CGVector, P0 = cocoa.CGVector, P1 = unknown>(_convertVector: P0, _toCoordinateSpace: P1): R;
    convertRect_fromCoordinateSpace<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_convertRect: P0, _fromCoordinateSpace: P1): R;
    convertRect_toCoordinateSpace<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_convertRect: P0, _toCoordinateSpace: P1): R;
    convertPoint_fromCoordinateSpace<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_convertPoint: P0, _fromCoordinateSpace: P1): R;
    convertPoint_toCoordinateSpace<R = cocoa.CGPoint, P0 = cocoa.CGPoint, P1 = unknown>(_convertPoint: P0, _toCoordinateSpace: P1): R;
    alignmentRectInCoordinateSpace_options<R = cocoa.CGRect, P0 = unknown, P1 = number>(_alignmentRectInCoordinateSpace: P0, _options: P1): R;
    transformForConvertingFromParentCoordinateSpace<R = cocoa.CGAffineTransform>(): R;
    transformForConvertingToParentCoordinateSpace<R = cocoa.CGAffineTransform>(): R;
    parentCoordinateSpace<R = cocoa.MSLayerCoordinateSpace>(): R;
    bounds<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface _TtC17SketchControllers9ResizeBox<T = any> extends cocoa.classes.SwiftObject {
      // + _TtC17SketchControllers9ResizeBox(SketchControllers,SketchControllers1):
      
    }
  }
}
