/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavBannerView<T = any> extends cocoa.NSView {
    _preferredAppearance<R = unknown>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    _commonInit<R = void>(): R;
    _currentBannerStyle<R = number>(): R;
    bannerType<R = number>(): R;
    setBannerType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSNavBannerView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSNavBannerView>(): R;
      new: <R = NSNavBannerView>() => R;
    }
  }
}

declare const NSNavBannerView: cocoa.classes.NSNavBannerView;
