/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemBezelView<T = any> extends cocoa.NSWidgetView {
    _defaultVibrancyBlendMode<R = number>(): R;
  }
  namespace classes {
    export interface NSSegmentItemBezelView<T = any> extends cocoa.classes.NSWidgetView {
      alloc<R = NSSegmentItemBezelView>(): R;
      new: <R = NSSegmentItemBezelView>() => R;
    }
  }
}

declare const NSSegmentItemBezelView: cocoa.classes.NSSegmentItemBezelView;
