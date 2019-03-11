/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerClipViewLayer<T = any> extends cocoa._NSSafariTransformLayer {
    anchorPoint<R = cocoa.CGPoint>(): R;
    setAnchorPoint<R = void, P0 = cocoa.CGPoint>(_setAnchorPoint: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerClipViewLayer<T = any> extends cocoa.classes._NSSafariTransformLayer {  }
  }
}

declare const NSVisualTabPickerClipViewLayer: cocoa.classes.NSVisualTabPickerClipViewLayer;
