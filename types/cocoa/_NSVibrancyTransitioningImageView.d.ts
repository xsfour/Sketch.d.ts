/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSVibrancyTransitioningImageView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    _performSnapshotCrossFadeWithFinalOpacity_animationDuration<R = void, P0 = number, P1 = number>(__performSnapshotCrossFadeWithFinalOpacity: P0, _animationDuration: P1): R;
    _showNextImageViewWithFinalOpacity_animationDuration<R = void, P0 = number, P1 = number>(__showNextImageViewWithFinalOpacity: P0, _animationDuration: P1): R;
    _showNextImageViewWithFinalOpacity<R = void, P0 = number>(__showNextImageViewWithFinalOpacity: P0): R;
    _installImageView<R = void, P0 = unknown>(__installImageView: P0): R;
    _createImageView<R = unknown>(): R;
    _setUpNextImageViewWithImage_vibrancy<R = void, P0 = unknown, P1 = boolean>(__setUpNextImageViewWithImage: P0, _vibrancy: P1): R;
    setImage_withVibrancy_opacity_animationDuration<R = void, P0 = unknown, P1 = boolean, P2 = number, P3 = number>(_setImage: P0, _withVibrancy: P1, _opacity: P2, _animationDuration: P3): R;
    setImage_withVibrancy_opacity<R = void, P0 = unknown, P1 = boolean, P2 = number>(_setImage: P0, _withVibrancy: P1, _opacity: P2): R;
    initWithFrame_image<R = unknown, P0 = CGRect, P1 = unknown>(_initWithFrame: P0, _image: P1): R;
    delegate<R = _NSVibrancyTransitioningImageViewDelegate>(): R;
    setDelegate<R = void, P0 = _NSVibrancyTransitioningImageViewDelegate>(_v: P0): R;
    imageViewConfigurationBlock<R = CDUnknownBlockType>(): R;
    setImageViewConfigurationBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace classes {
    export interface _NSVibrancyTransitioningImageView<T = any> extends NSView {
      alloc<R = _NSVibrancyTransitioningImageView>(): R;
      new: <R = _NSVibrancyTransitioningImageView>() => R;
    }
  }
}
