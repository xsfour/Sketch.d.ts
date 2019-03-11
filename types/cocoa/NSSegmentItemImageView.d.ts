/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemImageView<T = any> extends cocoa.NSImageView {
    _preferredAppearance<R = unknown>(): R;
    _defaultVibrancyBlendMode<R = number>(): R;
  }
  namespace classes {
    export interface NSSegmentItemImageView<T = any> extends cocoa.classes.NSImageView {
      alloc<R = NSSegmentItemImageView>(): R;
      new: <R = NSSegmentItemImageView>() => R;
    }
  }
}

declare const NSSegmentItemImageView: cocoa.classes.NSSegmentItemImageView;
