/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeBottomFadeView<T = any> extends MSWelcomeTopFadeView {}
  namespace classes {
    export interface MSWelcomeBottomFadeView<T = any> extends MSWelcomeTopFadeView {
      alloc<R = MSWelcomeBottomFadeView>(): R;
      new: <R = MSWelcomeBottomFadeView>() => R;
    }
  }
}

declare const MSWelcomeBottomFadeView: cocoa.classes.MSWelcomeBottomFadeView;
