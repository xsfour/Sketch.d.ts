/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerProtocol<T = any> extends cocoa.NSObjectProtocol {
    childrenIncludingSelf<R = cocoa.NSArray, P0 = boolean>(_childrenIncludingSelf: P0): R;
    children<R = cocoa.NSArray>(): R;
    layerWithID<R = unknown, P0 = cocoa.NSString>(_layerWithID: P0): R;
    transformForRect<R = cocoa.NSAffineTransform, P0 = cocoa.CGRect>(_transformForRect: P0): R;
    isLayerExportable<R = boolean>(): R;
    origin<R = cocoa.CGPoint>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = cocoa.BCEdgePaddings>(): R;
    CGTransformForFrame<R = cocoa.CGAffineTransform>(): R;
    hasTransforms<R = boolean>(): R;
    bounds<R = cocoa.CGRect>(): R;
    rect<R = cocoa.CGRect>(): R;
    objectID<R = cocoa.NSString>(): R;
    rotation<R = number>(): R;
    isFlippedVertical<R = boolean>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isVisible<R = boolean>(): R;
  }
  namespace classes {
    export interface MSLayerProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSLayerProtocol: cocoa.classes.MSLayerProtocol;
