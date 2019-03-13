/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSegmentItemLabelView<T = any> extends NSTextField {
    _defaultVibrancyBlendMode<R = number>(): R;
  }
  namespace classes {
    export interface NSSegmentItemLabelView<T = any> extends NSTextField {
      alloc<R = NSSegmentItemLabelView>(): R;
      new: <R = NSSegmentItemLabelView>() => R;
    }
  }
}

declare const NSSegmentItemLabelView: cocoa.classes.NSSegmentItemLabelView;
