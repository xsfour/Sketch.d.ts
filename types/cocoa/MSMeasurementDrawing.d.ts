/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMeasurementDrawing<T = any> extends cocoa.MSSmartGuideDrawing {
    cxx_destruct<R = void>(): R;
    frameForMeasuringSizeOfRect_zoomScale<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = number>(_frameForMeasuringSizeOfRect: P0, _zoomScale: P1): R;
    performLabelTransformInRect_block<R = void, P0 = cocoa.CGRect, P1 = cocoa.CDUnknownBlockType>(_performLabelTransformInRect: P0, _block: P1): R;
    drawLabel_withFrame_zoomScale<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = number>(_drawLabel: P0, _withFrame: P1, _zoomScale: P2): R;
    textAttributesForZoomScale<R = unknown, P0 = number>(_textAttributesForZoomScale: P0): R;
    drawVerticalGuideWithFrame_zoomScale<R = void, P0 = cocoa.CGRect, P1 = number>(_drawVerticalGuideWithFrame: P0, _zoomScale: P1): R;
    drawHorizontalGuideWithFrame_zoomScale<R = void, P0 = cocoa.CGRect, P1 = number>(_drawHorizontalGuideWithFrame: P0, _zoomScale: P1): R;
    drawWithFrame_zoomScale<R = void, P0 = cocoa.CGRect, P1 = number>(_drawWithFrame: P0, _zoomScale: P1): R;
    color<R = cocoa.NSColor>(): R;
    setColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    labelTransform<R = cocoa.CGAffineTransform>(): R;
    setLabelTransform<R = void, P0 = cocoa.CGAffineTransform>(_v: P0): R;
    labelText<R = cocoa.NSString>(): R;
    setLabelText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSMeasurementDrawing<T = any> extends cocoa.classes.MSSmartGuideDrawing {
      alloc<R = MSMeasurementDrawing>(): R;
      new: <R = MSMeasurementDrawing>() => R;
      minFrameSizeAtZoomScale<R = number, P0 = number>(_minFrameSizeAtZoomScale: P0): R;
    }
  }
}

declare const MSMeasurementDrawing: cocoa.classes.MSMeasurementDrawing;
