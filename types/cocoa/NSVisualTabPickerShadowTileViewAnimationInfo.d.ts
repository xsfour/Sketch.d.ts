/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerShadowTileViewAnimationInfo<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithLayerForAnimation_animationKey<R = unknown, P0 = unknown, P1 = unknown>(_initWithLayerForAnimation: P0, _animationKey: P1): R;
    animationKey<R = NSString>(): R;
    layerForAnimation<R = CALayer>(): R;
  }
  namespace classes {
    export interface NSVisualTabPickerShadowTileViewAnimationInfo<T = any> extends NSObject {
      alloc<R = NSVisualTabPickerShadowTileViewAnimationInfo>(): R;
      new: <R = NSVisualTabPickerShadowTileViewAnimationInfo>() => R;
    }
  }
}

declare const NSVisualTabPickerShadowTileViewAnimationInfo: cocoa.classes.NSVisualTabPickerShadowTileViewAnimationInfo;
