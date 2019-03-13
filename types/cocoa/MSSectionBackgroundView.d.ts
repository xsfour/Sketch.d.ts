/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSectionBackgroundView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
    drawWhiteHeader<R = void>(): R;
    stackSubviews<R = void>(): R;
    recalculateHeight<R = void>(): R;
  }
  namespace classes {
    export interface MSSectionBackgroundView<T = any> extends NSView {
      alloc<R = MSSectionBackgroundView>(): R;
      new: <R = MSSectionBackgroundView>() => R;
      requiredHeightForViews<R = number, P0 = unknown>(_requiredHeightForViews: P0): R;
      separatorBetweenView_andView<R = unknown, P0 = unknown, P1 = unknown>(_separatorBetweenView: P0, _andView: P1): R;
      sectionBackgroundWithController_wantsSeparatorAfterViews<R = unknown, P0 = unknown, P1 = boolean>(_sectionBackgroundWithController: P0, _wantsSeparatorAfterViews: P1): R;
      sectionBackgroundWithController<R = unknown, P0 = unknown>(_sectionBackgroundWithController: P0): R;
    }
  }
}

declare const MSSectionBackgroundView: cocoa.classes.MSSectionBackgroundView;
