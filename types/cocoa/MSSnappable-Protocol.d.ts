/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnappableProtocol<T = any> extends cocoa.NSObjectProtocol {
    textCorrectionTransform<R = cocoa.CGAffineTransform>(): R;
    concatAncestorsAndSelfTransforms<R = void>(): R;
    refreshOverlayWithAbsoluteMargins<R = void, P0 = cocoa.CGSize>(_refreshOverlayWithAbsoluteMargins: P0): R;
    distanceRectangleToItem_axis<R = cocoa.CGRect, P0 = cocoa.MSSnappable, P1 = number>(_distanceRectangleToItem: P0, _axis: P1): R;
    anchorsForSnappingOnAxes<R = cocoa.NSArray, P0 = number>(_anchorsForSnappingOnAxes: P0): R;
    enumerateAnchorsForSnappingOnAxes_usingBlock<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_enumerateAnchorsForSnappingOnAxes: P0, _usingBlock: P1): R;
    alignmentRectInCoordinateSpace_options<R = cocoa.CGRect, P0 = cocoa.MSLayerCoordinateSpace, P1 = number>(_alignmentRectInCoordinateSpace: P0, _options: P1): R;
    boundsRect<R = cocoa.CGRect>(): R;
    name<R = cocoa.NSString>(): R;
    snapItemForDrawing<R = cocoa.MSSnappable>(): R;
    midXHeightAnchor<R = cocoa.MSLayoutPosition>(): R;
    baselineAnchor<R = cocoa.MSLayoutPosition>(): R;
    heightAnchor<R = cocoa.MSLayoutDimension>(): R;
    widthAnchor<R = cocoa.MSLayoutDimension>(): R;
    centerYAnchor<R = cocoa.MSLayoutPosition>(): R;
    centerXAnchor<R = cocoa.MSLayoutPosition>(): R;
    bottomAnchor<R = cocoa.MSLayoutPosition>(): R;
    topAnchor<R = cocoa.MSLayoutPosition>(): R;
    rightAnchor<R = cocoa.MSLayoutPosition>(): R;
    leftAnchor<R = cocoa.MSLayoutPosition>(): R;
    coordinateSpace<R = cocoa.MSLayer>(): R;
    rectForSnapping<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSSnappableProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSSnappableProtocol: cocoa.classes.MSSnappableProtocol;
