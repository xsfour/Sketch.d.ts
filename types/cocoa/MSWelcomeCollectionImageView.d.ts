/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionImageView<T = any> extends NSImageView {
    imageInterpolation<R = number>(): R;
    setImageInterpolation<R = void, P0 = number>(_v: P0): R;
    doubleClickAction<R = string>(): R;
    setDoubleClickAction<R = void, P0 = string>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionImageView<T = any> extends NSImageView {
      alloc<R = MSWelcomeCollectionImageView>(): R;
      new: <R = MSWelcomeCollectionImageView>() => R;
    }
  }
}

declare const MSWelcomeCollectionImageView: cocoa.classes.MSWelcomeCollectionImageView;
