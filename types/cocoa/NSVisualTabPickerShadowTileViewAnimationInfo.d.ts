/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerShadowTileViewAnimationInfo<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithLayerForAnimation_animationKey<R = unknown, P0 = unknown, P1 = unknown>(_initWithLayerForAnimation: P0, _animationKey: P1): R;
    animationKey<R = cocoa.NSString>(): R;
    layerForAnimation<R = cocoa.CALayer>(): R;
  }
  namespace classes {
    export interface NSVisualTabPickerShadowTileViewAnimationInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSVisualTabPickerShadowTileViewAnimationInfo>(): R;
      new: <R = NSVisualTabPickerShadowTileViewAnimationInfo>() => R;
    }
  }
}

declare const NSVisualTabPickerShadowTileViewAnimationInfo: cocoa.classes.NSVisualTabPickerShadowTileViewAnimationInfo;
