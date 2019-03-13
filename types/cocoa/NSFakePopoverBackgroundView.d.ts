/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFakePopoverBackgroundView<T = any> extends NSVisualEffectView {}
  namespace classes {
    export interface NSFakePopoverBackgroundView<T = any> extends NSVisualEffectView {
      alloc<R = NSFakePopoverBackgroundView>(): R;
      new: <R = NSFakePopoverBackgroundView>() => R;
    }
  }
}

declare const NSFakePopoverBackgroundView: cocoa.classes.NSFakePopoverBackgroundView;
