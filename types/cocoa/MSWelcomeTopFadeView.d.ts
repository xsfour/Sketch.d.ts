/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeTopFadeView<T = any> extends cocoa.NSView {
    gradientAngle<R = number>(): R;
  }
  namespace classes {
    export interface MSWelcomeTopFadeView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSWelcomeTopFadeView>(): R;
      new: <R = MSWelcomeTopFadeView>() => R;
    }
  }
}

declare const MSWelcomeTopFadeView: cocoa.classes.MSWelcomeTopFadeView;
