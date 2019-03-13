/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerThumbnailView<T = any> extends NSVisualTabPickerShadowTileView {
    _closeButtonPressed<R = void, P0 = unknown>(__closeButtonPressed: P0): R;
    reloadData<R = void>(): R;
    _createTitleTextField<R = unknown>(): R;
    _setUpSubviews<R = void>(): R;
    _setUpShadows<R = void>(): R;
    _selectThumbnail<R = void>(): R;
    startTitleOpacityAnimation<R = void, P0 = number>(_startTitleOpacityAnimation: P0): R;
    _getTitleOpacityAnimationDuration_timeOffset_gridAnimation<R = void, P0 = number, P1 = number, P2 = number>(__getTitleOpacityAnimationDuration: P0, _timeOffset: P1, _gridAnimation: P2): R;
    willStartExitAnimation<R = void>(): R;
    exposeBorderVisible<R = boolean>(): R;
    setExposeBorderVisible<R = void, P0 = boolean>(_v: P0): R;
    closeButtonVisible<R = boolean>(): R;
    setCloseButtonVisible<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = NSVisualTabPickerThumbnailDelegate>(): R;
    setDelegate<R = void, P0 = NSVisualTabPickerThumbnailDelegate>(_v: P0): R;
    dataSource<R = NSVisualTabPickerThumbnailDataSource>(): R;
    setDataSource<R = void, P0 = NSVisualTabPickerThumbnailDataSource>(_v: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerThumbnailView<T = any> extends NSVisualTabPickerShadowTileView {
      alloc<R = NSVisualTabPickerThumbnailView>(): R;
      new: <R = NSVisualTabPickerThumbnailView>() => R;
    }
  }
}

declare const NSVisualTabPickerThumbnailView: cocoa.classes.NSVisualTabPickerThumbnailView;
