/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeBottomFadeView<T = any> extends cocoa.MSWelcomeTopFadeView {}
  namespace classes {
    export interface MSWelcomeBottomFadeView<T = any> extends cocoa.classes.MSWelcomeTopFadeView {
      alloc<R = MSWelcomeBottomFadeView>(): R;
      new: <R = MSWelcomeBottomFadeView>() => R;
    }
  }
}

declare const MSWelcomeBottomFadeView: cocoa.classes.MSWelcomeBottomFadeView;
