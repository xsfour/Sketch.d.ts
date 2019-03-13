/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnappableProtocol<T = any> extends NSObjectProtocol {
    textCorrectionTransform<R = CGAffineTransform>(): R;
    concatAncestorsAndSelfTransforms<R = void>(): R;
    refreshOverlayWithAbsoluteMargins<R = void, P0 = CGSize>(_refreshOverlayWithAbsoluteMargins: P0): R;
    distanceRectangleToItem_axis<R = CGRect, P0 = MSSnappable, P1 = number>(_distanceRectangleToItem: P0, _axis: P1): R;
    anchorsForSnappingOnAxes<R = NSArray, P0 = number>(_anchorsForSnappingOnAxes: P0): R;
    enumerateAnchorsForSnappingOnAxes_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(_enumerateAnchorsForSnappingOnAxes: P0, _usingBlock: P1): R;
    alignmentRectInCoordinateSpace_options<R = CGRect, P0 = MSLayerCoordinateSpace, P1 = number>(_alignmentRectInCoordinateSpace: P0, _options: P1): R;
    boundsRect<R = CGRect>(): R;
    name<R = NSString>(): R;
    snapItemForDrawing<R = MSSnappable>(): R;
    midXHeightAnchor<R = MSLayoutPosition>(): R;
    baselineAnchor<R = MSLayoutPosition>(): R;
    heightAnchor<R = MSLayoutDimension>(): R;
    widthAnchor<R = MSLayoutDimension>(): R;
    centerYAnchor<R = MSLayoutPosition>(): R;
    centerXAnchor<R = MSLayoutPosition>(): R;
    bottomAnchor<R = MSLayoutPosition>(): R;
    topAnchor<R = MSLayoutPosition>(): R;
    rightAnchor<R = MSLayoutPosition>(): R;
    leftAnchor<R = MSLayoutPosition>(): R;
    coordinateSpace<R = MSLayer>(): R;
    rectForSnapping<R = CGRect>(): R;
  }
  namespace classes {
    export interface MSSnappableProtocol<T = any> extends NSObjectProtocol {  }
  }
}
