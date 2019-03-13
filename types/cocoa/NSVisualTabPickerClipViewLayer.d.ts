/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerClipViewLayer<T = any> extends _NSSafariTransformLayer {
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_setAnchorPoint: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerClipViewLayer<T = any> extends _NSSafariTransformLayer {  }
  }
}

declare const NSVisualTabPickerClipViewLayer: cocoa.classes.NSVisualTabPickerClipViewLayer;
